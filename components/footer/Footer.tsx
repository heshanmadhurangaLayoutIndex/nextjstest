"use Client";

export interface Menu {
  footer_nav_1: any[];
  footer_nav_2: any[];
}

// this footer Component is Server Side Rendering
export default function Footer({ data }: { data: Menu }) {
  return (
    <footer className="bg-neutral-100 text-center dark:bg-neutral-600 lg:text-left">
      <div className="container p-6 content-center">
        {data?.footer_nav_1?.length ? (
          data?.footer_nav_1.map((item) => {
            return (
              <div>
                <h2 className="text-2xl font-semibold">{item.menu}</h2>
                <ul className="mt-4">
                  {item.sub_menus.map((sub_item: any) => {
                    return (
                      <li className="mt-2">
                        <a
                          href={sub_item.url}
                          className="text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors duration-200"
                        >
                          {sub_item.menu}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })
        ) : (
          <h1 className="text-center">No Footer</h1>
        )}
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral-200 p-4 text-center text-neutral-700 dark:bg-neutral-700 dark:text-neutral-200">
        © 2023 Copyright:
        <a className="text-neutral-800 dark:text-neutral-400" href="https://tailwind-elements.com/">
          TW Elements
        </a>
      </div>
    </footer>
  );
}
