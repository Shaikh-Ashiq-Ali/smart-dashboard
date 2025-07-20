export default function LazyComponent() {
  return (
    <div className="alert alert-success mt-3">
      {/* Yeh part tab dikhayega jab component lazy load ho chuka ho */}
      🎉 Lazy Component Loaded Successfully!
    </div>
  );
}
