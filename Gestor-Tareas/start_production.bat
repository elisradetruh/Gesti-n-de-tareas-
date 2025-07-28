@echo off
REM Script para iniciar el servidor de producción con Waitress en Windows
REM Uso: start_production.bat

echo Iniciando Gestor de Tareas en modo produccion...

REM Verificar si el entorno virtual está activado
if "%VIRTUAL_ENV%"=="" (
    echo ⚠️  Advertencia: No se detectó un entorno virtual activo
    echo Recomendado: Activar el entorno virtual antes de continuar
    set /p continuar="¿Continuar de todas formas? (y/N): "
    if /i not "%continuar%"=="y" exit /b 1
)

REM Instalar dependencias si es necesario
echo 📦 Verificando dependencias...
pip install -r requirements.txt

REM Configurar variables de entorno para producción
set FLASK_ENV=production
set SECRET_KEY=%SECRET_KEY%
if "%SECRET_KEY%"=="" set SECRET_KEY=cambiar-en-produccion-por-una-clave-segura

REM Iniciar Waitress
echo 🚀 Iniciando servidor Waitress en http://localhost:8000
echo Presiona Ctrl+C para detener el servidor
echo.

python waitress_server.py 