"use client"

import { Popover, Transition } from "@headlessui/react"
import { ArrowRightMini, BarsThree, XMark } from "@medusajs/icons"
import { Region } from "@medusajs/medusa"
import { clx, useToggleState } from "@medusajs/ui"
import { Fragment } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CountrySelect from "../country-select"

const PrimarySideMenuItems = {
  HOME: "/",
  "SHOP ALL": "/store",
}

const SecondarySideMenuItems = {
  "CONTACT US": "/contact",
  Search: "/search",
  Account: "/account",
}

const SideMenu = ({ regions }: { regions: Region[] | null }) => {
  const toggleState = useToggleState()

  return (
    <div className="h-full">
      <div className="flex items-center h-full">
        <Popover className="h-full flex">
          {({ open, close }) => (
            <>
              <div className="relative flex h-full">
                <Popover.Button data-testid="nav-menu-button"
                                className="relative h-full flex items-center transition-all ease-out duration-200 focus:outline-none hover:text-ui-fg-base">
                  <BarsThree aria-label="Menu" />
                </Popover.Button>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="transition ease-out duration-150"
                enterFrom="opacity-0"
                enterTo="opacity-100 backdrop-blur-2xl"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 backdrop-blur-2xl"
                leaveTo="opacity-0"
              >
                <Popover.Panel
                  className="flex flex-col absolute w-3/5 sm:pr-0 sm:w-1/3 2xl:w-1/4 sm:min-w-min h-[100vh] z-30 inset-x-0 text-sm text-ui-fg-on-color backdrop-blur-2xl">
                  <div data-testid="nav-menu-popup"
                       className="flex flex-col h-full bg-[rgba(33,22,12,0.8)] justify-between p-3">
                    <div className="flex flex-col gap-y-6">
                      <div className="flex justify-end" id="xmark">
                        <button data-testid="close-menu-button" onClick={close}>
                          <XMark aria-label="Close menu" />
                        </button>
                      </div>
                      <ul className="flex flex-col gap-6 items-start justify-start">
                        {Object.entries(PrimarySideMenuItems).map(([name, href]) => {
                          return (
                            <>
                              <li key={name}>
                                <LocalizedClientLink
                                  href={href}
                                  className="leading-10 hover:text-ui-fg-disabled"
                                  onClick={close}
                                  data-testid={`${name.toLowerCase()}-link`}
                                >
                                  {name}
                                </LocalizedClientLink>
                              </li>
                              <hr className="w-full border-ui-border-base" />
                            </>
                          )
                        })}
                      </ul>
                      <ul className={"flex flex-col items-start justify-start"}>
                        {Object.entries(SecondarySideMenuItems).map(([name, href]) => {
                          return (
                            <>
                              <li key={name}>
                                <LocalizedClientLink
                                  href={href}
                                  className="leading-10 hover:text-ui-fg-disabled text-gray-400 font-light"
                                  onClick={close}
                                  data-testid={`${name.toLowerCase()}-link`}
                                >
                                  {name}
                                </LocalizedClientLink>
                              </li>
                            </>
                          )
                        })}
                      </ul>
                    </div>
                    <div className="flex flex-col gap-y-6">
                      <div
                        className="flex justify-between"
                        onMouseEnter={toggleState.open}
                        onMouseLeave={toggleState.close}
                      >
                        {regions && (
                          <CountrySelect
                            toggleState={toggleState}
                            regions={regions}
                          />
                        )}
                        <ArrowRightMini
                          className={clx(
                            "transition-transform duration-150",
                            toggleState.state ? "-rotate-90" : "",
                          )}
                        />
                      </div>
                      {/*<Text className="flex justify-between txt-compact-small">*/}
                      {/*  © {new Date().getFullYear()} Nick's sweet treats. All rights*/}
                      {/*  reserved.*/}
                      {/*</Text>*/}
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  )
}

export default SideMenu
