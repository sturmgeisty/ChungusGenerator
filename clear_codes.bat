@echo off
cd %~dp0
set folder="codes"
echo ChungusGenerator :: Deleting all files in the %folder% directory...
del /Q %folder%\*
echo ChungusGenerator :: All files in %folder% deleted.
pause