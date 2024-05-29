const NotFoundPage = () => {
  return (
    <div
      style={{
        paddingTop: '50px',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <p
        style={{
          marginTop: '20px',
          marginBottom: '20px',
          fontWeight: '900',
          fontSize: '34px',
          color: '#FFF',
        }}
      >
        Page is Not found
      </p>
    </div>
  );
};

export default NotFoundPage;
