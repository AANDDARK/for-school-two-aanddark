import Image from 'next/image'; // Імпортуємо компонент Image

export default function page() {
  return (
    <>
      <div className="bg-gray-100 text-gray-900 font-sans p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Популярні проекти, пов`язані з GNU, FOSS та FSF</h1>
        <p className="text-lg text-center mb-8">
          Ось три з найпопулярніших проектів, які мають великий вплив на світ вільного програмного забезпечення.
        </p>

        {/* Проект Linux */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Linux</h2>
          <p className="text-lg mb-4">
            Linux — це ядро операційної системи, яке стало основою для багатьох дистрибутивів Linux, таких як Ubuntu, Debian та інших.
            Це проект, який має відкрите програмне забезпечення, яке дозволяє користувачам вільно використовувати, модифікувати та поширювати код.
          </p>
          <Image 
            src="/linux.svg.png" 
            alt="Linux Logo" 
            width={500} 
            height={500} 
            className="mx-auto mb-4" // Центрує зображення
          />
          <p>
            Дізнатися більше можна на офіційному сайті: 
            <a href="https://www.kernel.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">kernel.org</a>
          </p>
        </section>

        {/* Проект Blender */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Blender</h2>
          <p className="text-lg mb-4">
            Blender — це потужний набір для 3D-моделювання, анімації, рендерингу, створення відео та інтерактивних додатків. Це безкоштовна та відкрита альтернатива комерційним програмам для 3D-графіки.
          </p>
          <Image 
            src="/blender.png" 
            alt="Blender Logo" 
            width={500} 
            height={500} 
            className="mx-auto mb-4" // Центрує зображення
          />
          <p>
            Дізнатися більше можна на офіційному сайті: 
            <a href="https://www.blender.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">blender.org</a>
          </p>
        </section>

        {/* Проект GCC/G++ */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">GCC/G++</h2>
          <p className="text-lg mb-4">
            GCC (GNU Compiler Collection) — це набір компіляторів для мов програмування C, C++, Fortran, і багатьох інших. Він є основним інструментом для компіляції програмного забезпечення на багатьох операційних системах.
          </p>
        
          <p>
            Дізнатися більше можна на офіційному сайті: 
            <a href="https://gcc.gnu.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">gcc.gnu.org</a>
          </p>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-600">
          <p>© 2024 GNU, FOSS, FSF - Сайт про вільне програмне забезпечення</p>
        </footer>
      </div>
    </>
  );
}
