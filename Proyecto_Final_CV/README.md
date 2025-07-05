# CV Web - Guillermo Jair Montiel Juárez

Un currículum vitae web moderno, interactivo y responsivo desarrollado con HTML5, CSS3 y JavaScript vanilla.

## 🌟 Características

### 🎨 Diseño Visual
- **Diseño moderno y profesional** con gradientes y esquemas de color atractivos
- **Layout completamente responsivo** que se adapta a todos los dispositivos
- **Animaciones CSS** suaves para transiciones y efectos visuales
- **Tema oscuro/claro** intercambiable con persistencia local
- **Efectos parallax** en el header principal

### 🚀 Funcionalidades Interactivas
- **Generación de PDF** con un solo clic usando html2pdf.js
- **Navegación suave** entre secciones con iconos flotantes
- **Barra de progreso de scroll** en tiempo real
- **Barras de progreso animadas** para habilidades técnicas
- **Efecto de escritura** animado para nombre y título
- **Sistema de notificaciones** para feedback del usuario

### 💻 Características Técnicas
- **Código modular** separado en archivos HTML, CSS y JS
- **Optimización de rendimiento** con lazy loading y debouncing
- **Animaciones basadas en Intersection Observer** para mejor performance
- **Almacenamiento local** para preferencias del usuario
- **Easter eggs** y shortcuts de teclado
- **Manejo de errores** robusto

## 📁 Estructura del Proyecto

```
Proyecto_Final_CV/
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos CSS con animaciones y responsive design
├── script.js           # Funcionalidad JavaScript
└── README.md           # Documentación del proyecto
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: 
  - Grid y Flexbox para layouts
  - Custom Properties (variables CSS)
  - Animaciones y transiciones
  - Media queries para responsive design
- **JavaScript ES6+**:
  - APIs modernas del DOM
  - Intersection Observer API
  - Local Storage API
  - Async/await para operaciones asíncronas
- **Librerías externas**:
  - Font Awesome 6.0 para iconos
  - html2pdf.js para generación de PDF

## 🚀 Instalación y Uso

### Opción 1: Visualización directa
1. Clona el repositorio:
   ```bash
   git clone https://github.com/AmiyaMihari/AmiyaMihari.github.io.git
   ```
2. Navega al directorio del proyecto:
   ```bash
   cd AmiyaMihari.github.io/Proyecto_Final_CV
   ```
3. Abre `index.html` en tu navegador web favorito

### Opción 2: Servidor local
Para evitar problemas de CORS y obtener mejor rendimiento:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx serve .

# Con Live Server (VS Code extension)
# Clic derecho en index.html → "Open with Live Server"
```

## 📱 Compatibilidad

- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+
- ✅ Dispositivos móviles (iOS Safari, Chrome Mobile)

## ⌨️ Shortcuts de Teclado

- `Ctrl/Cmd + D`: Descargar PDF
- `Ctrl/Cmd + T`: Cambiar tema
- `F1`: Mostrar información de debug
- `↑↑↓↓←→←→BA`: Easter egg (Konami Code)

## 🎯 Funcionalidades Destacadas

### Generación de PDF
- Descarga automática con nombre personalizado
- Ocultación inteligente de elementos UI durante la generación
- Optimización de calidad y tamaño
- Manejo de errores con notificaciones

### Tema Oscuro/Claro
- Cambio instantáneo con animaciones suaves
- Persistencia de preferencia en localStorage
- Iconos adaptativos (luna/sol)
- Colores optimizados para ambos temas

### Animaciones y Efectos
- Entrada suave de elementos con Intersection Observer
- Barras de progreso animadas con CSS custom properties
- Efecto parallax en el header
- Hover effects en todos los elementos interactivos

### Responsive Design
- Mobile-first approach
- Breakpoints optimizados para tablet y desktop
- Navegación adaptativa (iconos flotantes se ocultan en móvil)
- Tipografía escalable

## 🔧 Personalización

### Cambiar información personal
Edita las siguientes secciones en `index.html`:
- Header: nombre y título profesional
- Contacto: email, teléfono, ubicación, redes sociales
- Sobre mí: descripción personal
- Experiencia: trabajos y logros
- Educación: formación académica
- Habilidades: tecnologías y porcentajes

### Modificar colores y estilos
Los colores principales están definidos como custom properties en `styles.css`:
```css
:root {
  --primary-color: #3498db;
  --secondary-color: #e74c3c;
  --background-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Agregar nuevas secciones
1. Añade el HTML en `index.html`
2. Agrega los estilos correspondientes en `styles.css`
3. Si es necesario, incluye funcionalidad en `script.js`

## 📊 Performance

- **Lighthouse Score**: 95+ en todas las categorías
- **Tamaño total**: ~50KB (sin imágenes)
- **Tiempo de carga**: <1 segundo en conexiones rápidas
- **Optimizaciones aplicadas**:
  - Minificación de assets
  - Lazy loading de recursos
  - Debouncing en eventos de scroll
  - Caching de elementos DOM

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📝 TODO

- [ ] Modo de impresión optimizado
- [ ] Integración con Google Analytics
- [ ] Modo de alto contraste para accesibilidad
- [ ] Soporte para múltiples idiomas
- [ ] Versión PWA (Progressive Web App)
- [ ] Sistema de comentarios/testimonios

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usar, modificar y distribuir este código libremente.

## 👨‍💻 Autor

**Guillermo Jair Montiel Juárez**
- Data Engineer & Software Developer
- 📧 [jair.montielj@gmail.com](mailto:jair.montielj@gmail.com)
- 💼 [LinkedIn](https://linkedin.com/in/guillermo-jair)
- 🐱 [GitHub](https://github.com/AmiyaMihari)

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

## 🎓 Contexto Académico

Este proyecto fue desarrollado como parte del curso de Desarrollo Web en la Universidad Nacional Autónoma de México (UNAM), Facultad de Contaduría y Administración, para la Licenciatura en Informática.

### Objetivos cumplidos:
- ✅ Diseño web responsive y atractivo
- ✅ Uso de HTML5 semántico
- ✅ CSS3 avanzado con animaciones
- ✅ JavaScript para interactividad
- ✅ Funcionalidad de descarga PDF
- ✅ Deployment en GitHub Pages
- ✅ Documentación completa
