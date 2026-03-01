<?php
// admin_panel/dashboard.php
require_once 'auth.php';
checkLogin();
require_once '../db/config.php';
if (!isset($pdo)) { die("DB Error"); }

// Delete Operation
if (isset($_GET['delete_id'])) {
    $deleteId = $_GET['delete_id'];
    $stmt = $pdo->prepare("DELETE FROM registrations WHERE id = ?");
    if ($stmt->execute([$deleteId])) {
        echo "<script>alert('Registration deleted successfully!'); window.location.href='dashboard.php';</script>";
        exit();
    }
}

$totalReg = $pdo->query("SELECT COUNT(*) FROM registrations")->fetchColumn();
$successReg = $pdo->query("SELECT COUNT(*) FROM registrations WHERE payment_status = 'Success'")->fetchColumn();
$totalRevenue = $pdo->query("SELECT SUM(total_amount) FROM registrations WHERE payment_status = 'Success'")->fetchColumn() ?: 0;

$stmt = $pdo->query("SELECT * FROM registrations ORDER BY created_at DESC");
$registrations = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - Food Science 2026</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <nav class="dashboard-nav">
        <div class="nav-logo">
            <span style="font-weight: 700; color: var(--primary); font-size: 1.25rem;">FOOD SCIENCE 2026 ADMIN</span>
        </div>
        <div class="nav-links">
            <span style="margin-right: 1.5rem; color: var(--text-muted);">Welcome, <strong><?php echo $_SESSION['admin_user']; ?></strong></span>
            <a href="logout.php" class="logout"><i class="fas fa-sign-out-alt"></i> Logout</a>
        </div>
    </nav>

    <main class="main-content">
        <div class="stats-grid">
            <div class="stat-card">
                <div style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 0.5rem;">TOTAL FORMS</div>
                <div class="value"><?php echo $totalReg; ?></div>
            </div>
            <div class="stat-card">
                <div style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 0.5rem;">SUCCESSFUL</div>
                <div class="value" style="color: var(--success);"><?php echo $successReg; ?></div>
            </div>
            <div class="stat-card">
                <div style="color: var(--text-muted); font-size: 0.8rem; margin-bottom: 0.5rem;">REVENUE</div>
                <div class="value" style="color: var(--primary);">$<?php echo number_format($totalRevenue, 2); ?></div>
            </div>
        </div>

        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Country</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Submitted At</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <?php if (empty($registrations)): ?>
                        <tr><td colspan="7" style="text-align: center; color: var(--text-muted);">No registrations found.</td></tr>
                    <?php endif; ?>
                    <?php foreach ($registrations as $reg): ?>
                        <tr>
                            <td>#<?php echo $reg['id']; ?></td>
                            <td><?php echo htmlspecialchars($reg['title'].' '.$reg['name']); ?></td>
                            <td><?php echo htmlspecialchars($reg['country']); ?></td>
                            <td style="font-weight: 600;">$<?php echo number_format($reg['total_amount'], 2); ?></td>
                            <td>
                                <span class="status-badge <?php echo $reg['payment_status'] === 'Success' ? 'status-success' : 'status-pending'; ?>">
                                    <?php echo $reg['payment_status']; ?>
                                </span>
                            </td>
                            <td style="font-size: 0.85rem; color: var(--text-muted);">
                                <?php echo date('M d, Y h:i A', strtotime($reg['created_at'])); ?>
                            </td>
                            <td>
                                <button class="btn-view" onclick='showDetails(<?php echo json_encode($reg); ?>)'>
                                    <i class="fas fa-eye"></i> View
                                </button>
                                <a href="?delete_id=<?php echo $reg['id']; ?>" class="btn-delete" onclick="return confirm('WARNING: Are you sure you want to delete this registration? This action cannot be undone.')">
                                    <i class="fas fa-trash"></i> Delete
                                </a>
                            </td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </main>

    <div id="detailsModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>Registration Details</h2>
                <span class="close-modal" onclick="closeModal()">&times;</span>
            </div>
            <div id="modalBody" class="modal-body"></div>
        </div>
    </div>

    <script>
        function showDetails(data) {
            let html = `
                <div class="details-grid">
                    <div class="details-label">ID:</div><div class="details-value">#${data.id}</div>
                    <div class="details-label">Name:</div><div class="details-value">${data.title} ${data.name}</div>
                    <div class="details-label">Job Title:</div><div class="details-value">${data.job_title || 'N/A'}</div>
                    <div class="details-label">Email:</div><div class="details-value">${data.email}</div>
                    <div class="details-label">Phone:</div><div class="details-value">${data.phone}</div>
                    <div class="details-label">Organization:</div><div class="details-value">${data.org}</div>
                    <div class="details-label">Country/City:</div><div class="details-value">${data.country} / ${data.city || 'N/A'}</div>
                    <div class="details-label">Coupon:</div><div class="details-value">${data.coupon_code || 'None'} ${data.discount_amount > 0 ? '(-$' + data.discount_amount + ')' : ''}</div>
                    <div class="details-label">Total Amount:</div><div class="details-value" style="color: var(--primary);">$${data.total_amount}</div>
                    <div class="details-label">Submitted:</div><div class="details-value" style="font-size: 0.9rem;">${new Date(data.created_at).toLocaleString()}</div>
                </div>
                <h4 style="margin-top: 1rem; color: var(--text-muted); font-size: 0.7rem;">BILLING ADDRESS</h4>
                <div class="details-full-text">${data.billing_address || 'N/A'}</div>
                <h4 style="margin-top: 1rem; color: var(--text-muted); font-size: 0.7rem;">REGISTRATION INFO</h4>
                <div class="details-full-text">${data.reg_info.replace(/<br\s*\/?>/gi, '\n')}</div>
            `;
            document.getElementById('modalBody').innerHTML = html;
            document.getElementById('detailsModal').style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        function closeModal() {
            document.getElementById('detailsModal').style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    </script>
</body>
</html>
