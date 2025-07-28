# Directorio de Imágenes

Este directorio está destinado para almacenar imágenes estáticas de la aplicación.

## Uso recomendado:

- **Logo de la aplicación**: `logo.png`, `logo.svg`
- **Iconos personalizados**: `favicon.ico`, `icon-*.png`
- **Imágenes de fondo**: `background.jpg`, `pattern.png`
- **Ilustraciones**: `empty-state.svg`, `success.svg`

## Formatos soportados:

- PNG (recomendado para iconos y logos)
- JPG/JPEG (recomendado para fotografías)
- SVG (recomendado para iconos vectoriales)
- ICO (para favicon)

## Ejemplo de uso en templates:

```html
<img src="{{ url_for('static', filename='images/logo.png') }}" alt="Logo">
```

## Optimización:

- Comprime las imágenes antes de subirlas
- Usa formatos apropiados (SVG para iconos, JPG para fotos)
- Considera diferentes tamaños para responsive design 