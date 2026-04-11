@echo off
echo Saving Hero Images to your project...
set "BRAIN_DIR=C:\Users\user\.gemini\antigravity\brain\cca12aca-806b-4821-966d-42ad5058e79a"
set "TARGET_DIR=public\assets\hero"

if not exist "%TARGET_DIR%" mkdir "%TARGET_DIR%"

copy "%BRAIN_DIR%\industrial_cement_factory_hero_*.png" "%TARGET_DIR%\hero-1.png"
copy "%BRAIN_DIR%\steel_plant_heavy_industry_hero_*.png" "%TARGET_DIR%\hero-2.png"
copy "%BRAIN_DIR%\oil_refinery_industrial_hero_*.png" "%TARGET_DIR%\hero-3.png"
copy "%BRAIN_DIR%\power_plant_heavy_engineering_hero_*.png" "%TARGET_DIR%\hero-4.png"

echo Done! Hero images are now in %TARGET_DIR%.
pause
