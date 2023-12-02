export default function Footer() {
  return (
    <footer className="w-full max-w-xl bg-white rounded-lg dark:bg-neutral-900 flex-none">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center dark:text-neutral-700">
          belle was made by Zachary Arney{' '}
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a
              href="https://zach-arney.com/"
              className="hover:underline me-4 md:me-6"
            >
              website
            </a>
          </li>
          <li>
            <a
              href="https://github.com/zacharyarney/belle-web"
              className="hover:underline me-4 md:me-6"
            >
              github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
