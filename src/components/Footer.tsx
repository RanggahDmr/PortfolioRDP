export default function Footer() {
  return (
    <footer className="bg-(--bg-color) text-white py-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} R.DMR — Built using React + Tailwind
      </p>
    </footer>
  );
}
