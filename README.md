# Gestor de Tareas - Aplicación Flask

Una aplicación web simple desarrollada con Flask que te permite crear, gestionar y hacer seguimiento de tus tareas diarias.

## Características

- ✅ Crear nuevas tareas
- ✅ Marcar tareas como completadas
- ✅ Desmarcar tareas (toggle)
- ✅ Eliminar tareas
- ✅ Estadísticas de progreso
- ✅ Interfaz moderna con Bootstrap 5
- ✅ Almacenamiento en memoria (sin base de datos)
- ✅ Mensajes flash para feedback
- ✅ Diseño responsive

## Instalación

1. **Clonar o descargar el proyecto**
   ```bash
   cd Gestor-Tareas
   ```

2. **Crear un entorno virtual (recomendado)**
   ```bash
   python -m venv venv
   ```

3. **Activar el entorno virtual**
   
   **Windows:**
   ```bash
   venv\Scripts\activate
   ```
   
   **macOS/Linux:**
   ```bash
   source venv/bin/activate
   ```

4. **Instalar dependencias**
   ```bash
   pip install -r requirements.txt
   ```

## Ejecución

### Modo Desarrollo

1. **Ejecutar la aplicación**
   ```bash
   python main.py
   ```

2. **Abrir en el navegador**
   ```
   http://localhost:5000
   ```

### Modo Producción

#### Opción 1: Gunicorn (Linux/macOS)

1. **Usar el script automático:**
   ```bash
   chmod +x start_production.sh
   ./start_production.sh
   ```

2. **O ejecutar manualmente:**
   ```bash
   gunicorn -c gunicorn.conf.py wsgi:app
   ```

#### Opción 2: Waitress (Windows)

1. **Usar el script automático:**
   ```cmd
   start_production.bat
   ```

2. **O ejecutar manualmente:**
   ```cmd
   python waitress_server.py
   ```

#### Opción 3: Comando directo

```bash
# Con Gunicorn
gunicorn --bind 0.0.0.0:8000 --workers 4 wsgi:app

# Con Waitress
waitress-serve --host=0.0.0.0 --port=8000 wsgi:app
```

## Funcionalidades

### Rutas disponibles

- `/` - Página principal con lista de tareas y formulario para agregar
- `/agregar` - Procesa el formulario de nueva tarea (POST)
- `/completar/<id>` - Marca/desmarca una tarea como completada
- `/eliminar/<id>` - Elimina una tarea
- `/about` - Página acerca de la aplicación
- `/api/health` - Endpoint de health check con estadísticas

### Estructura de datos

Cada tarea se almacena como un diccionario con:
```python
{
    'id': 1,                    # ID único de la tarea
    'texto': 'Mi tarea',        # Descripción de la tarea
    'hecho': False,             # Estado de completado
    'fecha_creacion': '2024-01-01 12:00:00'  # Fecha de creación
}
```

## Estructura del proyecto

```
Gestor-Tareas/
├── main.py                    # Aplicación principal Flask
├── wsgi.py                    # Punto de entrada WSGI
├── gunicorn.conf.py           # Configuración de Gunicorn
├── waitress_server.py         # Servidor Waitress
├── start_production.sh        # Script de inicio (Linux/macOS)
├── start_production.bat       # Script de inicio (Windows)
├── templates/                 # Plantillas HTML
│   ├── base.html             # Plantilla base con Bootstrap
│   ├── index.html            # Página principal con lista de tareas
│   ├── about.html            # Página acerca de
│   ├── 404.html              # Página de error 404
│   └── 500.html              # Página de error 500
├── static/                   # Archivos estáticos (CSS, JS, imágenes)
├── requirements.txt          # Dependencias del proyecto
└── README.md                # Este archivo
```

## Configuración

### Desarrollo
- **Puerto**: 5000
- **Host**: 0.0.0.0 (accesible desde cualquier IP)
- **Debug**: True
- **Secret Key**: Configurable mediante variable de entorno `SECRET_KEY`
- **Almacenamiento**: En memoria (se pierde al reiniciar la aplicación)

### Producción
- **Puerto**: 8000
- **Host**: 0.0.0.0
- **Debug**: False
- **Workers**: Configurado automáticamente según CPU
- **Logging**: Configurado para producción
- **Secret Key**: **IMPORTANTE**: Cambiar por una clave segura

## Variables de entorno para producción

```bash
# Clave secreta segura (OBLIGATORIO en producción)
export SECRET_KEY="tu-clave-secreta-muy-segura-aqui"

# Entorno de Flask
export FLASK_ENV=production
```

## Uso de la aplicación

1. **Agregar una tarea**: Escribe el texto de la tarea en el formulario y haz clic en "Agregar Tarea"
2. **Marcar como completada**: Haz clic en el botón "Completar" junto a la tarea
3. **Desmarcar tarea**: Haz clic en "Desmarcar" para volver a marcar como pendiente
4. **Eliminar tarea**: Haz clic en "Eliminar" para borrar la tarea (con confirmación)
5. **Ver estadísticas**: En la parte inferior se muestran las estadísticas de tareas

## Próximos pasos

Para expandir esta aplicación, considera agregar:

- 🔧 Base de datos persistente (SQLite, PostgreSQL)
- 🔧 Autenticación de usuarios
- 🔧 Categorías para las tareas
- 🔧 Fechas de vencimiento
- 🔧 Prioridades
- 🔧 Búsqueda y filtros
- 🔧 Exportar tareas
- 🔧 API REST completa
- 🔧 Tests unitarios
- 🔧 Docker containerization

## Tecnologías utilizadas

- **Flask** - Framework web de Python
- **Bootstrap 5** - Framework CSS para el frontend
- **Bootstrap Icons** - Iconografía
- **Jinja2** - Motor de plantillas
- **Python 3.x** - Lenguaje de programación
- **Gunicorn** - Servidor WSGI para producción (Linux/macOS)
- **Waitress** - Servidor WSGI para producción (Windows)

## Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT. 

##  Resumen: Cómo usar servidores WSGI de producción

He configurado tu aplicación para usar servidores WSGI de producción. Aquí tienes las opciones:

###  **Para Linux/macOS (Gunicorn):**

1. **Instalar dependencias:**
   ```bash
   pip install -r requirements.txt
   ```

2. **Ejecutar con script automático:**
   ```bash
   chmod +x start_production.sh
   ./start_production.sh
   ```

3. **O ejecutar manualmente:**
   ```bash
   gunicorn -c gunicorn.conf.py wsgi:app
   ```

### 🪟 **Para Windows (Waitress):**

1. **Instalar dependencias:**
   ```cmd
   pip install -r requirements.txt
   ```

2. **Ejecutar con script automático:**
   ```cmd
   start_production.bat
   ```

3. **O ejecutar manualmente:**
   ```cmd
   python waitress_server.py
   ```

### 🔧 **Configuración importante para producción:**

1. **Cambiar la SECRET_KEY:**
   ```bash
   export SECRET_KEY="tu-clave-secreta-muy-segura-aqui"
   ```

2. **La aplicación estará disponible en:**
   ```
   http://localhost:8000
   ```

###  **Ventajas de usar servidores WSGI de producción:**

- ✅ **Mejor rendimiento** - Múltiples workers
- ✅ **Más estable** - Sin reinicios automáticos
- ✅ **Logging apropiado** - Para monitoreo
- ✅ **Seguridad** - Sin modo debug
- ✅ **Escalabilidad** - Configuración optimizada

### 🚨 **Diferencias con el servidor de desarrollo:**

| Característica | Desarrollo | Producción |
|----------------|------------|------------|
| Puerto | 5000 | 8000 |
| Debug | ✅ | ❌ |
| Workers | 1 | Múltiples |
| Reinicio automático | ✅ | ❌ |
| Logging | Básico | Avanzado |
| Rendimiento | Bajo | Alto |

Ahora tu aplicación está lista para ser desplegada en producción con un servidor WSGI apropiado. ¡Los scripts automáticos te facilitarán el proceso! 
