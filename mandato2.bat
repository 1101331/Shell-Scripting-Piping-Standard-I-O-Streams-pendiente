@echo off
set name=%1
if [%name%]==[] (exit /b 100) else (echo Hola %name%)
exit /b 0