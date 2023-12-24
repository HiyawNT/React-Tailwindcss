const ContactSection = () => {
  return (
    <div className="bg-gray-200">
      <div className="container flex flex-col mx-auto bg-white">
        <div className="w-full bg-gray-200 draggable">
          <div className="container flex flex-col items-center gap-16 mx-auto my-32">
            <div className="w-full lg:w-1/3">
              <div className="lg:max-w-lg text-center">
                <h1
                  className="text-2xl font-bold tracking-wide dark:text-white lg:text-4xl"
                  style={{ color: "#43A6C6" }}
                >
                  <span style={{ color: "#000" }}>How else can </span> we help?
                </h1>

                <div className="mt-8 space-y-5" style={{ maxWidth: "800px" }}>
                  <p className="flex -mx-2" style={{ color: "#43A6C6" }}>
                    <span className="mx-2 text-gray-700 ">
                      If you're looking for a property to buy, sell or rent you
                      can be sure that we will be providing you a better service
                      than any other company with such services
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {/*  Section 1*/}
              <div className="flex flex-col items-center gap-3 px-2 py-10 bg-white rounded-3xl shadow-main">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#43a6c6"
                      fill-rule="evenodd"
                      d="M11.606 2.08a1 1 0 0 1 .788 0l6.394 2.741A2 2 0 0 1 20 6.66v6.86a7 7 0 0 1-3.527 6.077l-3.977 2.272a1 1 0 0 1-.992 0l-3.977-2.272A7 7 0 0 1 4 13.518V6.66a2 2 0 0 1 1.212-1.838zm4.101 8.627a1 1 0 0 0-1.414-1.414L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Reliability
                </p>
                <p
                  className="text-base  text-gray-700 text-center"
                  style={{ maxWidth: "400px" }}
                >
                  We keep our promises, providing upfromnt timelines and
                  bringing predictability
                </p>
              </div>

              {/*  Section 2 */}
              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl   shadow-main">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 14 14"
                  >
                    <path
                      fill="#43a6c6"
                      fill-rule="evenodd"
                      d="M6.997.009a5.125 5.125 0 1 0 0 10.249a5.125 5.125 0 0 0 0-10.25ZM7.2 2.432l.683 1.374a.214.214 0 0 0 .174.127l1.516.23a.23.23 0 0 1 .127.397L8.582 5.624a.222.222 0 0 0 0 .206l.214 1.508a.23.23 0 0 1-.34.246l-1.35-.714a.27.27 0 0 0-.223 0l-1.35.714a.23.23 0 0 1-.34-.246l.253-1.508a.222.222 0 0 0-.04-.206L4.287 4.552a.23.23 0 0 1 .127-.39l1.517-.221a.214.214 0 0 0 .174-.127l.683-1.374a.23.23 0 0 1 .413-.008Zm5.1 6.238a6.385 6.385 0 0 1-3.665 2.625l1.412 2.446a.5.5 0 0 0 .916-.12l.51-1.899l1.898.509a.5.5 0 0 0 .562-.733zm-6.936 2.626a6.384 6.384 0 0 1-3.667-2.621l-1.63 2.823a.5.5 0 0 0 .562.733l1.899-.509l.509 1.899a.5.5 0 0 0 .916.12z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </span>
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Quality First
                </p>
                <p
                  className="text-base  text-gray-700 text-center"
                  style={{ maxWidth: "400px" }}
                >
                  All projects are backed by our fantastic support and 100%
                  satisfaction guarantee.
                </p>
              </div>

              {/*  Section 3 */}
              <div className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="54"
                    height="54"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#43a6c6"
                      d="m17.967 6.558l-1.83-1.83c-1.546-1.545-2.318-2.318-3.321-2.605c-1.003-.288-2.068-.042-4.197.45l-1.228.283c-1.792.413-2.688.62-3.302 1.233c-.613.614-.82 1.51-1.233 3.302l-.284 1.228c-.491 2.13-.737 3.194-.45 4.197c.288 1.003 1.061 1.775 2.606 3.32l1.83 1.83C9.248 20.657 10.592 22 12.262 22c1.671 0 3.015-1.344 5.704-4.033c2.69-2.69 4.034-4.034 4.034-5.705c0-1.67-1.344-3.015-4.033-5.704"
                      opacity=".5"
                    />
                    <path
                      fill="#43a6c6"
                      d="M11.147 14.328c-.673-.672-.667-1.638-.265-2.403a.75.75 0 0 1 1.04-1.046c.34-.18.713-.276 1.085-.272a.75.75 0 0 1-.014 1.5a.88.88 0 0 0-.609.277c-.387.387-.285.775-.177.884c.11.109.497.21.884-.177c.784-.784 2.138-1.044 3.006-.177c.673.673.667 1.639.264 2.404a.75.75 0 0 1-1.04 1.045a2.201 2.201 0 0 1-1.472.232a.75.75 0 1 1 .302-1.47c.177.037.463-.021.708-.266c.388-.388.286-.775.177-.884c-.109-.109-.496-.21-.884.177c-.784.784-2.138 1.044-3.005.176m-1.126-4.035a2 2 0 1 0-2.828-2.828a2 2 0 0 0 2.828 2.828"
                    />
                  </svg>
                </span>
                <p className="text-2xl font-extrabold text-dark-grey-900">
                  Competitive Pricing
                </p>
                <p
                  className="text-base  text-gray-700 text-center"
                  style={{ maxWidth: "400px" }}
                >
                  Offering you a very competitve price without compromising on
                  quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
