@echo off
echo =======================Begin Log Heap======================= >>"gitUpdate.log"
rem Test Builds
If "%1"=="--test" goto GitTest

rem Emergency!
If "%1"=="-e" goto GitEmergency
rem Define "chk"
SET chk=%ERRORLEVEL%

rem Just because
echo =============================================
echo Git Auto-Server Updater
echo =============================================
echo Timers [10 AM / 2 PM / 8 PM / Midnight]
echo.

:AutoUpdate
rem Autoupdate times
If %time%==10:00:00.00 goto GitUpdate10
If %time%==14:00:00.00 goto GitUpdate14
if %time%==20:00:00.00 goto GitUpdate20
if %time%==00:00:00.00 goto GitUpdate00
rem Reminder: Not DoS friendly...
goto AutoUpdate

:GitUpdate10
rem Dir should be fine.
rem Update it
echo.
echo [Time Interval] %time% - Beginning Updates...
echo [Interval] %time% - Should Pass... >>"gitUpdate.log"
echo. >>"gitUpdate.log"
git pull
rem Tell me when its done
msg %Username% Autoupdater: 10 AM Pull Passed [%chk%]
echo [Popup] Autoupdater Passed - %time% >>"gitUpdate.log"
goto AutoUpdate

:GitUpdate14
echo.
echo [Time Interval] %time% - Beginning Updates...
echo [Interval] %time% - Should Pass... >>"gitUpdate.log"
echo. >>"gitUpdate.log"
git pull
msg %Username% Autoupdater: 2 PM Pull Passed [%chk%]
echo [Popup] Autoupdater Passed - %time% >>"gitUpdate.log"
goto AutoUpdate

:GitUpdate20
echo.
echo [Time Interval] %time% - Beginning Updates...
echo [Interval] %time% - Should Pass... >>"gitUpdate.log"
echo. >>"gitUpdate.log"
git pull
msg %Username% Autoupdater: 8 PM Pull Passed [%chk%]
echo [Popup] Autoupdater Passed - %time% >>"gitUpdate.log"
goto AutoUpdate

:GitUpdate00
echo.
echo [Time Interval] %time% - Beginning Updates...
echo [Interval] %time% - Should Pass... >>"gitUpdate.log"
echo. >>"gitUpdate.log"
git pull
msg %Username% Autoupdater: Midnight Pull Passed [%chk%]
echo [Popup] Autoupdater Passed - %time% >>"gitUpdate.log"
goto AutoUpdate

rem Dev reasons only...
:GitTest
echo.
echo [Time Interval] %time% - Called Using --test
echo [Development Mode] %time% - Should Pass... >>"gitUpdate.log"
echo. >>"gitUpdate.log"
git pull
msg %Username% Git TEST: Git Test Passed [%chk%]
echo [Popup] Test Passed - %time% >>"gitUpdate.log"
goto AutoUpdate

rem Emergency
:GitEmergency
echo.
echo [Time Interval] %time% - Called Using -e
echo [Emergency Mode] %time% - Should Pass... >>"gitUpdate.log"
echo 
git pull
msg %Username% Emergency Passed! [%chk%]
echo [Popup] Emergency Passed - %time% >>"gitUpdate.log"
goto AutoUpdate
