<?php
$dir = 'modern_ui/public/img';
$files = scandir($dir);
foreach ($files as $f) {
    if (strpos($f, ' ') !== false) {
        $nf = str_replace(' ', '_', $f);
        $nf = str_replace('__', '_', $nf); // double spaces
        if (rename("$dir/$f", "$dir/$nf")) {
            echo "Renamed $f to $nf\n";
        } else {
            echo "Failed to rename $f\n";
        }
    }
}
?>
