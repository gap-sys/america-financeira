import React from 'react';
import { Button } from '@geist-ui/react';
import { ICON } from 'src/presentation/assets'

const FaleConoscoNav: React.FC = () => {
  const handleClick = () => {
    window.open('https://api.whatsapp.com/send?phone=5519988285625&text=Ol%C3%A1,%20gostaria%20de%20simular%20minha%20antecipa%C3%A7%C3%A3o%20do%20FGTS', '_blank');
  };

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#25d366',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
  };

  const iconStyle = {
    marginLeft: '10px',
  };

  return (
    <Button
      onClick={handleClick}
      type="default"
      style={buttonStyle}
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <span>Fale Conosco</span>
      <ICON.IconBrandWhatsapp style={iconStyle} />
    </Button>
  );
};

export default FaleConoscoNav;