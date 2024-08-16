export default function Footer() {
  return (
    <footer className="w-full max-w-xl bg-neutral-700 rounded-lg dark:bg-neutral-900 flex-none">
      <div className="mx-auto max-w-screen-xl p-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <span className="text-sm text-neutral-300 text-center dark:text-neutral-700">
          belle was made by Zachary Arney{' '}
        </span>
        <ul className="flex flex-wrap justify-center items-center text-center mt-0 text-sm font-medium text-gray-400 dark:text-gray-400">
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
