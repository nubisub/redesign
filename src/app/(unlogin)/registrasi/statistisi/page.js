"use client";
import { Tab } from "@headlessui/react";
import { useState } from "react";
import BPS from "./BPS";
import NonBPS from "./NonBPS";
import Main from "@/app/components/main";
import Akun from "@/app/components/akun";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Home() {
	let [isOpen, setIsOpen] = useState(false);

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
	return (
		<>
			<div className="flex justify-between">
				<h1 className="md:text-3xl text-2xl md:mx-0 mx-2 font-semibold md:my-3 my-4 mb-1 text-white">
					Registrasi Akun
				</h1>
				<Akun />
			</div>
			<h2 className="text-md   md:mx-0 mx-2 md:mb-8 mb-3 text-white">
				Permintaan Akun Calon Statistisi
			</h2>
			{/* <Breadcrumbs props={navigation} /> */}
			<Main>
				<div className="w-full mx-auto px-0 md:mt-0 mt-2 py-4 sm:px-0">
					<Tab.Group>
						<Tab.List className="flex max-w-xl mx-4 md:mx-auto space-x-1 rounded-xl bg-blue-900/20 p-1">
							<Tab
								className={({ selected }) =>
									classNames(
										"w-full rounded-lg py-2.5  md:text-sm text-xs font-medium leading-5 text-gray-800",
										"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
										selected
											? "bg-white shadow font-semibold ring-2 ring-opacity-60 ring-offset-2 ring-offset-blue-400"
											: "text-blue-100 hover:bg-white/[0.2] hover:text-gray-900"
									)
								}
							>
								<span className="hidden md:inline">
									Registrasi Calon Statistisi Non-BPS
								</span>
								<span className="inline md:hidden">
									Calon Statistisi Non-BPS
								</span>
							</Tab>

							<Tab
								className={({ selected }) =>
									classNames(
										"w-full rounded-lg py-2.5  md:text-sm text-xs font-medium leading-5 text-gray-800",
										"ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
										selected
											? "bg-white shadow font-semibold ring-2 ring-opacity-60 ring-offset-2 ring-offset-blue-400"
											: "text-blue-100 hover:bg-white/[0.2] hover:text-gray-900"
									)
								}
							>
								<span className="hidden md:inline">
									Registrasi Calon Statistisi BPS
								</span>
								<span className="inline md:hidden">Calon Statistisi BPS</span>
							</Tab>
						</Tab.List>
						<Tab.Panels className="mt-2">
							<Tab.Panel className="bg-white rounded-xl">
								<div className="py-2">
									<NonBPS />
								</div>
							</Tab.Panel>
							<Tab.Panel>
								<div className="py-2">
									<BPS />
								</div>
							</Tab.Panel>
						</Tab.Panels>
					</Tab.Group>
				</div>
			</Main>
		</>
	);
}
