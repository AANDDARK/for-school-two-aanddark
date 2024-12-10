import Image from 'next/image'
export default function Page() {
  return (
    <>
      <div className="bg-gray-100 text-gray-900 font-sans p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Проект GNU, FOSS та FSF</h1>
        <p className="text-lg text-center mb-8">
          Цей сайт присвячений трьом ключовим концепціям вільного програмного забезпечення:
          <strong className="text-blue-500">GNU</strong>, <strong className="text-blue-500">FOSS</strong> та <strong className="text-blue-500">FSF</strong>.
        </p>

        {/* Секція для GNU */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Що таке GNU?</h2>
          <Image
      src="/gnu.svg"
      width={250}
      height={250}
      alt="Gnu picture"
      className='mx-auto'
    />
          <p className="text-lg mb-4">
            Проект GNU був заснований Річардом Столлманом у 1983 році з метою створити
            повністю вільну операційну систему. GNU — це абревіатура від "GNU's Not Unix" (GNU — це не Unix).
            Він включає в себе безліч програм, які разом забезпечують вільне та відкрите програмне забезпечення.
          </p>
        
          <p>
            Дізнатися більше можна на офіційному сайті: 
            <a href="https://www.gnu.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GNU.org</a>
          </p>
        </section>

        {/* Секція для FOSS */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Що таке FOSS?</h2>
          <Image
      src="/foss.png"
      width={250}
      height={250}
      alt="Picture of the author"
      className='mx-auto'
    />
          <p className="text-lg mb-4">
            Вільне та відкрите програмне забезпечення (FOSS) — це програми, які можна вільно використовувати, змінювати та поширювати.
            На відміну від пропрієтарного програмного забезпечення, FOSS гарантує користувачеві свободу у взаємодії з програмним забезпеченням.
          </p>
          <img src="/images/foss-logo.png" alt="FOSS Logo" className="mx-auto mb-4 w-32" />
          <p className="mb-4">
            Основні принципи FOSS:
            <ul className="list-disc pl-8 text-lg">
              <li>Свобода використовувати програму для будь-яких цілей</li>
              <li>Свобода вивчати та змінювати код програми</li>
              <li>Свобода поширювати копії та вдосконалені версії програми</li>
            </ul>
          </p>
        </section>

        {/* Секція для FSF */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Що таке FSF?</h2>
          <Image
      src="/FSF.png"
      width={250}
      height={250}
      alt="Picture of the author"
      className='mx-auto'
    />
          <p className="text-lg mb-4">
            Фонд Свободного ПЗ (FSF) був заснований Річардом Столлманом у 1985 році з метою просувати свободи користувачів і захищати вільне ПЗ.
            FSF активно працює над розвитком і підтримкою екосистеми вільного програмного забезпечення та захищає проекти, такі як GNU.
          </p>
          <img src="/images/fsf-logo.png" alt="FSF Logo" className="mx-auto mb-4 w-32" />
          <p>
            Дізнатися більше можна на офіційному сайті: 
            <a href="https://www.fsf.org" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">FSF.org</a>
          </p>
        </section>

        <footer className="mt-12 text-center text-sm text-gray-600">
          <p>© 2024 GNU, FOSS, FSF - Сайт про вільне програмне забезпечення</p>
        </footer>
      </div>
    </>
  );
}
