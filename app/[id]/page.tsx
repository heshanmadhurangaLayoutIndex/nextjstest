export default function page({ params }: any) {
  console.log(params);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <p className="text-white text-center">{params?.id}</p>
      </div>
    </main>
  );
}
