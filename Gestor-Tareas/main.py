from flask import Flask, render_template, request, redirect, url_for, flash
import os
from datetime import datetime

# Create Flask application instance
app = Flask(__name__)

# Configuration
app.config['SECRET_KEY'] = os.environ.get('SECRET_KEY', 'dev-secret-key-change-in-production')

# In-memory storage for tasks (in a real app, this would be a database)
tasks = []
task_id_counter = 1

def get_next_id():
    """Generate next unique task ID"""
    global task_id_counter
    current_id = task_id_counter
    task_id_counter += 1
    return current_id

# Routes
@app.route('/')
def index():
    """Home page - show task list and form to add new task"""
    return render_template('index.html', tasks=tasks)

@app.route('/agregar', methods=['POST'])
def agregar_tarea():
    """Process form to add new task and redirect to home"""
    texto = request.form.get('texto', '').strip()
    
    if not texto:
        flash('El texto de la tarea no puede estar vacío', 'error')
        return redirect(url_for('index'))
    
    nueva_tarea = {
        'id': get_next_id(),
        'texto': texto,
        'hecho': False,
        'fecha_creacion': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    }
    
    tasks.append(nueva_tarea)
    flash('Tarea agregada exitosamente', 'success')
    
    return redirect(url_for('index'))

@app.route('/completar/<int:task_id>')
def completar_tarea(task_id):
    """Mark a task as completed"""
    for task in tasks:
        if task['id'] == task_id:
            task['hecho'] = not task['hecho']  # Toggle completion status
            estado = "completada" if task['hecho'] else "pendiente"
            flash(f'Tarea marcada como {estado}', 'success')
            break
    else:
        flash('Tarea no encontrada', 'error')
    
    return redirect(url_for('index'))

@app.route('/eliminar/<int:task_id>')
def eliminar_tarea(task_id):
    """Delete a task"""
    global tasks
    tasks = [task for task in tasks if task['id'] != task_id]
    flash('Tarea eliminada exitosamente', 'success')
    
    return redirect(url_for('index'))

@app.route('/about')
def about():
    """About page route"""
    return render_template('about.html')

@app.route('/api/health')
def health_check():
    """Health check endpoint"""
    return {
        'status': 'healthy', 
        'message': 'Gestor de Tareas Flask app is running',
        'total_tasks': len(tasks),
        'completed_tasks': len([t for t in tasks if t['hecho']])
    }

# Error handlers
@app.errorhandler(404)
def not_found(error):
    return render_template('404.html'), 404

@app.errorhandler(500)
def internal_error(error):
    return render_template('500.html'), 500

if __name__ == '__main__':
    # Run the application in debug mode for development
    app.run(debug=True, host='0.0.0.0', port=5000) 