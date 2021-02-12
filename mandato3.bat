@echo off
node mandato2.js %1
if %errorlevel%==100 exit /b 100
exit /b 0