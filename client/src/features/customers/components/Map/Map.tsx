import Box from '@mui/material/Box';

const Map: React.FC = () => {
  /**
   *
   * IMPORTANT:
   *
   * I decieded to not use Google Maps API because it's necessary
   * to insert a credit dard to generate the API key.
   * But it's possible to see a map implentation that
   * I've done using react here:
   *
   * https://github.com/cirineurodrigues/front-end-technical-challenge/blob/master/src/components/Map/index.tsx
   *
   */

  return (
    <Box>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.2520162931373!2d-46.690751884422895!3d-23.595293068732666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5747e459be3f%3A0x8549845b2cc3e358!2sR.%20Gomes%20De%20Carvalho%2C%201666!5e0!3m2!1spt-BR!2sbr!4v1677250810606!5m2!1spt-BR!2sbr"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Box>
  );
};

export default Map;
