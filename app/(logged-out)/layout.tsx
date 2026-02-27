import LightDarkToggle from "@/components/ui/light-dark-toggle";

type Props = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center space-y-4">
        {children}
      </div>
      <LightDarkToggle className="fixed top-1/2 right-2 -mt-3" />
    </>
  );
}
