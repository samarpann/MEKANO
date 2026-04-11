@echo off
echo Moving images to public folder...
move "*.jpg.jpeg" "public\assets\products\"
move "*.jpeg" "public\assets\products\"
move "*.webp" "public\assets\products\"
move "*.png" "public\assets\products\"
move "*.jpg" "public\assets\products\"
move "*.avif" "public\assets\products\"
echo Done! All images are now in public\assets\products.
pause
