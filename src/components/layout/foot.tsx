import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";

const ServiceContent = () => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Terms of Service</h2>
            <p className="text-sm">
                Welcome to Wrapper Protocol website. By using our website and services, you agree to comply with the following terms and conditions. If you do not agree with these terms, please do not continue to use our website.
            </p>
            <p className="text-sm">
                1. You agree not to engage in any activity that could harm, disable, overload, or impair the website, or interfere with any other party use and enjoyment of the website.
            </p>
            <p className="text-sm">
                2. You agree not to access or attempt to access our website through any unauthorized means.
            </p>
            <p className="text-sm">
                3. This website and its content are owned by Wrapper Protocol and are protected by copyright and other intellectual property laws.
            </p>
            <p className="text-sm">
                4. We reserve the right to modify these terms at any time without prior notice. You are responsible for regularly reviewing these terms to ensure you are aware of any changes.
            </p>
            <p className="text-sm">
                5. You understand and agree that your use of Wrapper Protocol is at your own risk. The protocol operates on a decentralized network and Wrapper Protocol does not control the blockchain technology.
            </p>
            <p className="text-sm">
                6. Wrapper Protocol is not responsible for any losses or damages arising from the use of the platform, including but not limited to loss of data, funds, or other intangible assets.
            </p>
            <p className="text-sm">
                Thank you for your understanding and cooperation.
            </p>
        </>
    )
}

const PrivacyContent = () => {
    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Privacy Policy</h2>
            <p className="text-sm">
                At Wrapper Protocol, we respect your privacy and are committed to protecting your personal information.
            </p>
            <p className="text-sm">
                1. We do not collect any personal information.
            </p>
            <p className="text-sm">
                2. Our website does not use any tracking or analytics tools.
            </p>
            <p className="text-sm">
                3. You can browse our website with peace of mind, knowing that your personal information is not being collected.
            </p>
            <p className="text-sm">
                4. If you have any questions about our privacy policy, please feel free to contact us.
            </p><p className="text-sm">
                5. Our commitment to decentralization means that we do not store any of your personal data on centralized servers.
            </p>
            <p className="text-sm">
                6. Any transactions you perform using our protocol are processed on the blockchain and are subject to its inherent transparency and security features.
            </p>
            <p className="text-sm">
                Thank you for your trust and support.
            </p>

        </>
    )
}

export default function Foot() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
            <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Wrapper Protocal. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <Sheet>
                    <SheetTrigger asChild>
                        <Link className="text-xs hover:underline underline-offset-4" href="#">
                            Terms of Service
                        </Link>
                    </SheetTrigger>
                    <SheetContent side="bottom">
                        <div className="p-4">
                            <ServiceContent />
                        </div>
                    </SheetContent>
                </Sheet>
                <Sheet>
                    <SheetTrigger asChild>
                        <Link className="text-xs hover:underline underline-offset-4" href="#">
                            Privacy
                        </Link>
                    </SheetTrigger>
                    <SheetContent side="bottom">
                        <div className="p-4">
                            <PrivacyContent />
                        </div>
                    </SheetContent>
                </Sheet>
            </nav>
        </footer>
    )
}