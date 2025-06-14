"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function ProfileSettingsPage() {
  return (
    <form>
      <div className="space-y-12 sm:space-y-16">
        <div>
          <h2 className="font-semibold text-base/7">Profile</h2>
          <p className="mt-1 max-w-2xl text-gray-600 text-sm/6">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="space-y-8 sm:space-y-0 mt-10 pb-12 sm:pb-0 border-gray-900/10 sm:border-t border-b sm:divide-y sm:divide-gray-900/10">
            <div className="sm:items-start sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
              <label
                htmlFor="username"
                className="block sm:pt-1.5 font-medium text-sm/6"
              >
                Username
              </label>
              <div className="sm:col-span-2 mt-2 sm:mt-0">
                <div className="flex items-center bg-white pl-3 rounded-md sm:max-w-md outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <div className="text-base text-gray-500 sm:text-sm/6 select-none shrink-0">
                    workcation.com/
                  </div>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="janesmith"
                    className="block py-1.5 pr-3 pl-1 min-w-0 text-base sm:text-sm/6 placeholder:text-gray-400 grow focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div className="sm:items-start sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
              <label
                htmlFor="about"
                className="block sm:pt-1.5 font-medium text-sm/6"
              >
                About
              </label>
              <div className="sm:col-span-2 mt-2 sm:mt-0">
                <textarea
                  id="about"
                  name="about"
                  rows={3}
                  className="block bg-white px-3 py-1.5 rounded-md w-full sm:max-w-2xl text-base sm:text-sm/6 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  defaultValue={""}
                />
                <p className="mt-3 text-gray-600 text-sm/6">
                  Write a few sentences about yourself.
                </p>
              </div>
            </div>

            <div className="sm:items-center sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
              <label htmlFor="photo" className="block font-medium text-sm/6">
                Photo
              </label>
              <div className="sm:col-span-2 mt-2 sm:mt-0">
                <div className="flex items-center gap-x-3">
                  <UserCircleIcon
                    aria-hidden="true"
                    className="text-gray-300 size-12"
                  />
                  <button
                    type="button"
                    className="bg-white hover:bg-gray-50 shadow-xs px-2.5 py-1.5 rounded-md ring-1 ring-gray-300 ring-inset font-semibold text-sm"
                  >
                    Change
                  </button>
                </div>
              </div>
            </div>

            <div className="sm:items-start sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
              <label
                htmlFor="cover-photo"
                className="block sm:pt-1.5 font-medium text-sm/6"
              >
                Cover photo
              </label>
              <div className="sm:col-span-2 mt-2 sm:mt-0">
                <div className="flex justify-center px-6 py-10 border border-gray-900/25 border-dashed rounded-lg max-w-2xl">
                  <div className="text-center">
                    <PhotoIcon
                      aria-hidden="true"
                      className="mx-auto text-gray-300 size-12"
                    />
                    <div className="flex mt-4 text-gray-600 text-sm/6">
                      <label
                        htmlFor="file-upload"
                        className="relative focus-within:outline-hidden bg-white rounded-md focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
                      >
                        <span>Upload a file</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-gray-600 text-xs/5">
                      PNG, JPG, GIF up to 10MB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-base/7">Personal Information</h2>
          <p className="mt-1 max-w-2xl text-gray-600 text-sm/6">
            Use a permanent address where you can receive mail.
          </p>

          <div className="space-y-8 sm:space-y-0 mt-10 pb-12 sm:pb-0 border-gray-900/10 sm:border-t border-b sm:divide-y sm:divide-gray-900/10">
            <div className="sm:items-start sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
              <label
                htmlFor="first-name"
                className="block sm:pt-1.5 font-medium text-sm/6"
              >
                First name
              </label>
              <div className="sm:col-span-2 mt-2 sm:mt-0">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block bg-white px-3 py-1.5 rounded-md w-full sm:max-w-xs text-base sm:text-sm/6 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div className="sm:items-start sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
              <Label
                htmlFor="last-name"
                className="block sm:pt-1.5 font-medium text-sm/6"
              >
                Last name
              </Label>
              <div className="sm:col-span-2 mt-2 sm:mt-0">
                <Input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                />
              </div>
            </div>

            <div className="sm:items-start sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
              <Label
                htmlFor="email"
                className="block sm:pt-1.5 font-medium text-sm/6"
              >
                Email address
              </Label>
              <div className="sm:col-span-2 mt-2 sm:mt-0">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="sm:items-start sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
              <label
                htmlFor="country"
                className="block sm:pt-1.5 font-medium text-sm/6"
              >
                Country
              </label>
              <div className="sm:col-span-2 mt-2 sm:mt-0">
                <div className="grid grid-cols-1 sm:max-w-xs">
                  <select
                    id="country"
                    name="country"
                    autoComplete="country-name"
                    className="col-start-1 row-start-1 bg-white py-1.5 pr-8 pl-3 rounded-md w-full text-base sm:text-sm/6 appearance-none outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Mexico</option>
                  </select>
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="justify-self-end col-start-1 row-start-1 mr-2 text-gray-500 pointer-events-none size-5 self-center sm:size-4"
                  />
                </div>
              </div>
            </div>

            <div className="sm:items-start sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
              <label
                htmlFor="street-address"
                className="block sm:pt-1.5 font-medium text-sm/6"
              >
                Street address
              </label>
              <div className="sm:col-span-2 mt-2 sm:mt-0">
                <input
                  id="street-address"
                  name="street-address"
                  type="text"
                  autoComplete="street-address"
                  className="block bg-white px-3 py-1.5 rounded-md w-full sm:max-w-xl text-base sm:text-sm/6 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div className="sm:items-start sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
              <label
                htmlFor="city"
                className="block sm:pt-1.5 font-medium text-sm/6"
              >
                City
              </label>
              <div className="sm:col-span-2 mt-2 sm:mt-0">
                <input
                  id="city"
                  name="city"
                  type="text"
                  autoComplete="address-level2"
                  className="block bg-white px-3 py-1.5 rounded-md w-full sm:max-w-xs text-base sm:text-sm/6 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div className="sm:items-start sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
              <label
                htmlFor="region"
                className="block sm:pt-1.5 font-medium text-sm/6"
              >
                State / Province
              </label>
              <div className="sm:col-span-2 mt-2 sm:mt-0">
                <input
                  id="region"
                  name="region"
                  type="text"
                  autoComplete="address-level1"
                  className="block bg-white px-3 py-1.5 rounded-md w-full sm:max-w-xs text-base sm:text-sm/6 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>

            <div className="sm:items-start sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
              <label
                htmlFor="postal-code"
                className="block sm:pt-1.5 font-medium text-sm/6"
              >
                ZIP / Postal code
              </label>
              <div className="sm:col-span-2 mt-2 sm:mt-0">
                <input
                  id="postal-code"
                  name="postal-code"
                  type="text"
                  autoComplete="postal-code"
                  className="block bg-white px-3 py-1.5 rounded-md w-full sm:max-w-xs text-base sm:text-sm/6 placeholder:text-gray-400 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-semibold text-base/7">Notifications</h2>
          <p className="mt-1 max-w-2xl text-gray-600 text-sm/6">
            We'll always let you know about important changes, but you pick what
            else you want to hear about.
          </p>

          <div className="space-y-10 sm:space-y-0 mt-10 pb-12 sm:pb-0 border-gray-900/10 sm:border-t border-b sm:divide-y sm:divide-gray-900/10">
            <fieldset>
              <legend className="sr-only">By email</legend>
              <div className="sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
                <div aria-hidden="true" className="font-semibold text-sm/6">
                  By email
                </div>
                <div className="sm:col-span-2 mt-4 sm:mt-0">
                  <div className="space-y-6 max-w-lg">
                    <div className="flex gap-3">
                      <div className="flex items-center h-6 shrink-0">
                        <div className="group grid grid-cols-1 size-4">
                          <input
                            defaultChecked
                            id="comments"
                            name="comments"
                            type="checkbox"
                            aria-describedby="comments-description"
                            className="col-start-1 row-start-1 bg-white checked:bg-indigo-600 indeterminate:bg-indigo-600 disabled:bg-gray-100 disabled:checked:bg-gray-100 border border-gray-300 checked:border-indigo-600 indeterminate:border-indigo-600 disabled:border-gray-300 rounded-sm appearance-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="justify-self-center col-start-1 row-start-1 pointer-events-none size-3.5 self-center stroke-white group-has-disabled:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-checked:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-indeterminate:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-sm/6">
                        <label htmlFor="comments" className="font-medium">
                          Comments
                        </label>
                        <p id="comments-description" className="text-gray-500">
                          Get notified when someones posts a comment on a
                          posting.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex items-center h-6 shrink-0">
                        <div className="group grid grid-cols-1 size-4">
                          <input
                            id="candidates"
                            name="candidates"
                            type="checkbox"
                            aria-describedby="candidates-description"
                            className="col-start-1 row-start-1 bg-white checked:bg-indigo-600 indeterminate:bg-indigo-600 disabled:bg-gray-100 disabled:checked:bg-gray-100 border border-gray-300 checked:border-indigo-600 indeterminate:border-indigo-600 disabled:border-gray-300 rounded-sm appearance-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="justify-self-center col-start-1 row-start-1 pointer-events-none size-3.5 self-center stroke-white group-has-disabled:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-checked:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-indeterminate:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-sm/6">
                        <label htmlFor="candidates" className="font-medium">
                          Candidates
                        </label>
                        <p
                          id="candidates-description"
                          className="text-gray-500"
                        >
                          Get notified when a candidate applies for a job.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex items-center h-6 shrink-0">
                        <div className="group grid grid-cols-1 size-4">
                          <input
                            id="offers"
                            name="offers"
                            type="checkbox"
                            aria-describedby="offers-description"
                            className="col-start-1 row-start-1 bg-white checked:bg-indigo-600 indeterminate:bg-indigo-600 disabled:bg-gray-100 disabled:checked:bg-gray-100 border border-gray-300 checked:border-indigo-600 indeterminate:border-indigo-600 disabled:border-gray-300 rounded-sm appearance-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 forced-colors:appearance-auto"
                          />
                          <svg
                            fill="none"
                            viewBox="0 0 14 14"
                            className="justify-self-center col-start-1 row-start-1 pointer-events-none size-3.5 self-center stroke-white group-has-disabled:stroke-gray-950/25"
                          >
                            <path
                              d="M3 8L6 11L11 3.5"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-checked:opacity-100"
                            />
                            <path
                              d="M3 7H11"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="opacity-0 group-has-indeterminate:opacity-100"
                            />
                          </svg>
                        </div>
                      </div>
                      <div className="text-sm/6">
                        <label htmlFor="offers" className="font-medium">
                          Offers
                        </label>
                        <p id="offers-description" className="text-gray-500">
                          Get notified when a candidate accepts or rejects an
                          offer.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend className="sr-only">Push notifications</legend>
              <div className="sm:items-baseline sm:gap-4 sm:grid sm:grid-cols-3 sm:py-6">
                <div aria-hidden="true" className="font-semibold text-sm/6">
                  Push notifications
                </div>
                <div className="sm:col-span-2 mt-1 sm:mt-0">
                  <div className="max-w-lg">
                    <p className="text-gray-600 text-sm/6">
                      These are delivered via SMS to your mobile phone.
                    </p>
                    <div className="space-y-6 mt-6">
                      <div className="flex items-center gap-x-3">
                        <input
                          defaultChecked
                          id="push-everything"
                          name="push-notifications"
                          type="radio"
                          className="relative before:absolute before:inset-1 forced-colors:before:hidden not-checked:before:hidden bg-white before:bg-white checked:bg-indigo-600 disabled:before:bg-gray-400 disabled:bg-gray-100 border border-gray-300 checked:border-indigo-600 disabled:border-gray-300 rounded-full before:rounded-full size-4 appearance-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 forced-colors:appearance-auto"
                        />
                        <label
                          htmlFor="push-everything"
                          className="block font-medium text-sm/6"
                        >
                          Everything
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-email"
                          name="push-notifications"
                          type="radio"
                          className="relative before:absolute before:inset-1 forced-colors:before:hidden not-checked:before:hidden bg-white before:bg-white checked:bg-indigo-600 disabled:before:bg-gray-400 disabled:bg-gray-100 border border-gray-300 checked:border-indigo-600 disabled:border-gray-300 rounded-full before:rounded-full size-4 appearance-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 forced-colors:appearance-auto"
                        />
                        <label
                          htmlFor="push-email"
                          className="block font-medium text-sm/6"
                        >
                          Same as email
                        </label>
                      </div>
                      <div className="flex items-center gap-x-3">
                        <input
                          id="push-nothing"
                          name="push-notifications"
                          type="radio"
                          className="relative before:absolute before:inset-1 forced-colors:before:hidden not-checked:before:hidden bg-white before:bg-white checked:bg-indigo-600 disabled:before:bg-gray-400 disabled:bg-gray-100 border border-gray-300 checked:border-indigo-600 disabled:border-gray-300 rounded-full before:rounded-full size-4 appearance-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 forced-colors:appearance-auto"
                        />
                        <label
                          htmlFor="push-nothing"
                          className="block font-medium text-sm/6"
                        >
                          No push notifications
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-x-6 mt-6">
        <button type="button" className="font-semibold text-sm/6">
          Cancel
        </button>
        <button
          type="submit"
          className="inline-flex justify-center bg-indigo-600 hover:bg-indigo-500 shadow-xs px-3 py-2 rounded-md font-semibold text-sm text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save
        </button>
      </div>
    </form>
  );
}
