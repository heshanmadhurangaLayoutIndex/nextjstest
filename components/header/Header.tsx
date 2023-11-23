import Link from "next/link";

export interface Menu {
  header_nav: Nav[];
  main_nav: Nav[];
  isLoading: boolean;
}

export interface Nav {
  pg_id: string;
  url: string;
  menu: string;
  link_target: string;
  sub_menus: any[];
}

export default function Header({ header_nav, main_nav, isLoading }: Menu) {
  return (
    <header className="bg-white">
      {isLoading ? (
        <p className="text-black">isLoading</p>
      ) : (
        <>
          <header className="bg-purple-500">
            <nav className="mx-auto flex max-w-7xl items-center lg:justify-end p-1 lg:px-8" aria-label="Global">
              <div className="flex lg:flex-1 justify-between ">
                {header_nav?.map((item) => {
                  return (
                    <Link href={item.url} key={item.pg_id}>
                      <p className="text-sm font-semibold leading-6 text-gray-900">{item.menu}</p>
                    </Link>
                  );
                })}
              </div>
              <div className="hidden lg:flex  lg:justify-end">
                <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
                  Log in <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </nav>
          </header>
          <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-auto">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
            </div>
            <div className="flex lg:flex-1 justify-between">
              {main_nav?.map((item) => {
                return (
                  <Link href={item.url} key={item.pg_id}>
                    <p className="text-sm font-semibold leading-6 text-gray-900">{item.menu}</p>
                  </Link>
                );
              })}
            </div>
          </nav>
        </>
      )}
    </header>
  );
}
