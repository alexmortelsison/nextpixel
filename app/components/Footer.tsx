export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="flex justify-center text-gray-500 pb-1 pt-16">
      &copy;{year} All Rights Reserved. NextPixelStudioLabs.
    </div>
  );
}
