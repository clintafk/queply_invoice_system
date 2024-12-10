import Logo from "../../public/images/logo.png";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";

export default function Login() {
    return (
        <div className="flex h-screen min-h-screen items-center justify-center bg-gradient-to-r from-teal-500 to-teal-stop">
            <div className="flex h-custom-595 w-custom-420 flex-col items-center justify-center rounded-md bg-black p-custom-50 text-white opacity-75">
                <div className="flex h-full w-full flex-col justify-between">
                    <div className="flex flex-col gap-5">
                        <div className="flex justify-center">
                            <img
                                className="h-20 w-24"
                                src={Logo}
                                alt="Queply Logo"
                            />
                        </div>
                        <p className="text-center text-4xl font-bold">
                            Invoicing System
                        </p>
                    </div>
                    <div className="flex w-full flex-col gap-10px py-5">
                        <div className="flex flex-col gap-6px p-2">
                            <Label className="text-sm">Email:</Label>
                            <Input
                                className="rounded-sm text-black"
                                type="email"
                                placeholder="Email"
                            />
                        </div>
                        <div className="flex flex-col gap-10px">
                            <div className="flex flex-col gap-6px p-2">
                                <Label className="text-sm">Password:</Label>
                                <Input
                                    className="rounded-sm text-black"
                                    type="password"
                                    placeholder="***********"
                                />
                            </div>
                            <div className="cursor-pointer px-2 text-right text-teal-400 hover:text-teal-600">
                                <span className="text-sm">Forgot password</span>
                            </div>
                        </div>
                    </div>
                    <Button className="w-full rounded-3xl bg-teal-500 text-lg font-bold hover:bg-teal-600">
                        Log in
                    </Button>
                </div>
            </div>
        </div>
    );
}
