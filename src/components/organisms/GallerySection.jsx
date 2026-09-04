import { useState, useEffect } from "react";
import { SectionTitle } from "../elements/SectionTitle";
import Button from "../elements/Button";
import { GalleryDisplay } from "../fragments/galery/GalleryDisplay";
import galleryData from "../../data/PhotoGallery";

export const GallerySection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Hanya 8 foto yang ditampilkan di halaman utama
  const selectedIds = [4, 5, 18, 22, 23, 35, 49, 50];

  const previewData = galleryData.filter((item) =>
    selectedIds.includes(item.id),
  );

  const handleOpenModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCloseModal = (e) => {
    if (e) e.preventDefault();
    setIsModalOpen(false);
  };

  // Mengunci scroll ketika modal terbuka
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <SectionTitle
        subtitle="Galeri Hasil Pekerjaan"
        title="Hasil Treatment Kami"
      />

      {/* PREVIEW — HANYA 8 GAMBAR */}
      <div
        id="gallery"
        className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
      >
        {previewData.map((item) => (
          <GalleryDisplay key={item.id} photo={item.photo} alt={item.alt} />
        ))}
      </div>

      {/* BUTTON */}
      <div className="flex justify-center text-white">
        <Button onClick={handleOpenModal}>Lihat Semua Galeri</Button>
      </div>

      {/* MODAL BARU DIBUAT KETIKA USER KLIK */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          <div
            className="relative flex max-h-[85vh] w-full max-w-4xl flex-col overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Modal */}
            <div className="sticky top-0 z-10 flex items-center justify-between rounded-t-2xl border-b bg-white px-6 py-4">
              <h3 className="text-xl font-bold text-gray-800">
                Semua Hasil Treatment
              </h3>

              <button
                type="button"
                onClick={handleCloseModal}
                className="flex h-10 w-10 items-center justify-center rounded-full text-gray-600 transition duration-200 hover:bg-gray-100"
                aria-label="Tutup Modal"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* SEMUA GAMBAR BARU DIRANDER SETELAH MODAL DIBUKA */}

            <div className="grid grid-cols-2 gap-4 p-6 sm:grid-cols-3 md:grid-cols-4">
              {galleryData.map((item) => (
                <div
                  key={item.id}
                  className="relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-sm"
                >
                  <img
                    src={item.photo}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
