const ButtonGradient = () => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#f4f4f4" /> {/* Gris muy claro */}
          <stop offset="100%" stopColor="#f4f4f4" /> {/* Gris claro */}
        </linearGradient>
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#f4f4f4" /> {/* Gris intermedio */}
          <stop offset="100%" stopColor="#f4f4f4" /> {/* Gris casi blanco */}
        </linearGradient>
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor="#f4f4f4" /> {/* Blanco muy suave */}
          <stop offset="100%" stopColor="#f4f4f4" /> {/* Gris intermedio */}
        </linearGradient>
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#f4f4f4" /> {/* Gris suave */}
          <stop offset="100%" stopColor="#f4f4f4" /> {/* Gris muy claro */}
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
