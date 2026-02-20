```mermaid
graph TD
    A[Publicidad / Redes / Email] --> B(Landing Page de Registro)
    B --> C{¿Se registró?}
    
    C -- No --> D[Retargeting Ads / Abandono]
    C -- Sí --> E[Página de Gracias + Botón Calendario]
    
    E --> F[Email 1: Confirmación Inmediata]
    F --> G[Secuencia de Nutrición / Recordatorios]
    
    G --> H{Día del Evento}
    
    H --> I[Email: 1 hora antes]
    I --> J[Email: ¡Estamos en vivo!]
    
    J --> K[WEBINAR EN VIVO]
    
    K --> L{¿Asistió?}
    
    L -- Sí --> M[Email: Grabación + Oferta / CTA]
    L -- No --> N[Email: 'Te extrañamos' + Grabación por tiempo limitado]
