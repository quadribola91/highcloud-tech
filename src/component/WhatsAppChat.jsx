import { useState } from "react";

export default function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const phoneNumber = "2349058824643"; // Your WhatsApp number (Nigeria +234)
  const defaultMessage =
    "Hi Highcloud Tech! I have a question about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center w-14 h-14"
        aria-label="WhatsApp Chat"
        title="Chat with us on WhatsApp"
      >
        {/* WhatsApp Icon */}
        <svg
          className="w-7 h-7"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-4.91 1.369v.051a9.888 9.888 0 003.818 7.018l.044-.002a9.86 9.86 0 002.064-.183c.566-.087 1.107-.256 1.614-.498.51.732 1.388 2.292 1.388 2.292.168.493.04 1.05-.27 1.412-.31.362-.845.534-1.335.534-.38 0-.718-.088-1.03-.25a9.866 9.866 0 01-1.097.127c-5.448 0-9.885-4.437-9.885-9.885 0-.197.003-.394.012-.59A9.873 9.873 0 0112 2.029z" />
        </svg>
      </button>

      {/* Chat Preview Panel */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-40 w-80 bg-white rounded-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-green-500 text-white p-4 flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg">Highcloud Tech</h3>
              <p className="text-xs text-green-100">
                Typically replies instantly
              </p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-green-600 p-1 rounded"
              aria-label="Close chat"
            >
              ✕
            </button>
          </div>

          {/* Message Preview */}
          <div className="p-4 bg-gray-50 border-b border-gray-200 min-h-32">
            <div className="mb-4 p-3 bg-green-100 rounded-lg text-sm text-gray-800">
              <p className="font-semibold text-green-700 mb-1">Hi there! 👋</p>
              <p>
                Welcome to Highcloud Tech. How can we help you today? Click the
                button below to start chatting with us on WhatsApp.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 text-center transition-colors"
          >
            💬 Start WhatsApp Chat
          </a>
        </div>
      )}
    </>
  );
}
