// JavaScript para el Gestor de Tareas

document.addEventListener('DOMContentLoaded', function() {
    
    // Auto-hide flash messages after 5 seconds
    const flashMessages = document.querySelectorAll('.alert');
    flashMessages.forEach(function(message) {
        setTimeout(function() {
            const alert = new bootstrap.Alert(message);
            alert.close();
        }, 5000);
    });
    
    // Add animation to task items
    const taskItems = document.querySelectorAll('.list-group-item');
    taskItems.forEach(function(item, index) {
        item.style.animationDelay = (index * 0.1) + 's';
        item.classList.add('animate__animated', 'animate__fadeInUp');
    });
    
    // Add hover effects to buttons
    const actionButtons = document.querySelectorAll('.btn-action');
    actionButtons.forEach(function(button) {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
    
    // Confirm delete with custom styling
    const deleteButtons = document.querySelectorAll('.btn-danger');
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            if (!confirm('¿Estás seguro de que quieres eliminar esta tarea?')) {
                e.preventDefault();
            }
        });
    });
    
    // Auto-focus on task input
    const taskInput = document.querySelector('input[name="texto"]');
    if (taskInput) {
        taskInput.focus();
    }
    
    // Add keyboard shortcut (Ctrl+Enter) to submit form
    if (taskInput) {
        taskInput.addEventListener('keydown', function(e) {
            if (e.ctrlKey && e.key === 'Enter') {
                const form = this.closest('form');
                if (form) {
                    form.submit();
                }
            }
        });
    }
    
    // Add loading state to form submission
    const taskForm = document.querySelector('form[action*="agregar"]');
    if (taskForm) {
        taskForm.addEventListener('submit', function() {
            const submitButton = this.querySelector('button[type="submit"]');
            if (submitButton) {
                submitButton.innerHTML = '<i class="bi bi-hourglass-split"></i> Agregando...';
                submitButton.disabled = true;
            }
        });
    }
    
    // Add counter for tasks
    updateTaskCounter();
    
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Function to update task counter
function updateTaskCounter() {
    const taskItems = document.querySelectorAll('.list-group-item');
    const counter = document.querySelector('.badge');
    if (counter) {
        counter.textContent = taskItems.length + ' tareas';
    }
}

// Function to add a new task with animation
function addTaskWithAnimation(taskElement) {
    taskElement.style.opacity = '0';
    taskElement.style.transform = 'translateY(-20px)';
    
    setTimeout(function() {
        taskElement.style.transition = 'all 0.3s ease';
        taskElement.style.opacity = '1';
        taskElement.style.transform = 'translateY(0)';
    }, 100);
}

// Function to remove a task with animation
function removeTaskWithAnimation(taskElement) {
    taskElement.style.transition = 'all 0.3s ease';
    taskElement.style.opacity = '0';
    taskElement.style.transform = 'translateX(-100%)';
    
    setTimeout(function() {
        taskElement.remove();
        updateTaskCounter();
    }, 300);
} 