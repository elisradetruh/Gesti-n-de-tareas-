#!/bin/bash

# Script para iniciar el servidor de producción con Gunicorn
# Uso: ./start_production.sh

echo "Iniciando Gestor de Tareas en modo producción..."

# Verificar si el entorno virtual está activado
if [[ "$VIRTUAL_ENV" == "" ]]; then
    echo "⚠️  Advertencia: No se detectó un entorno virtual activo"
    echo "Recomendado: Activar el entorno virtual antes de continuar"
    read -p "¿Continuar de todas formas? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Instalar dependencias si es necesario
echo "📦 Verificando dependencias..."
pip install -r requirements.txt

# Configurar variables de entorno para producción
export FLASK_ENV=production
export SECRET_KEY=${SECRET_KEY:-"cambiar-en-produccion-por-una-clave-segura"}

# Iniciar Gunicorn
echo "🚀 Iniciando servidor Gunicorn en http://localhost:8000"
echo "Presiona Ctrl+C para detener el servidor"
echo ""

gunicorn -c gunicorn.conf.py wsgi:app 