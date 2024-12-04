function Box({ id, width, height, backgroundColor, removeBox }) {
  return (
    <div style={{ display: 'inline-block' }}>
      <div
        style={{
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor
        }}
      />
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  );
} 