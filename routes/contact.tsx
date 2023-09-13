import { useSignal } from "@preact/signals";
import Grid from "../components/Grid.tsx";

export default function Contact() {
  return (
    <>
      <div class="container mx-auto p-8">
        <h2 id="contact-details" class="text-2xl font-bold mb-4">
          Contact Details
        </h2>
        <div class="bg-blue-100 rounded-lg p-4 mb-4">
          <p>
            <strong>Note:</strong>{" "}
            This is the best way to reach me. Reach-ability lowers from top to
            bottom. For example, Signal and Matrix are the fastest ways to reach
            me, while Telegram is the slowest way.
          </p>
        </div>

        <div class="overflow-x-auto mb-4">
          <table class="min-w-full bg-white border border-gray-300">
            <colgroup>
              <col style="width: 50%" />
              <col style="width: 50%" />
            </colgroup>
            <thead>
              <tr class="header text-left border-b border-gray-300">
                <th class="py-2 px-4">Service</th>
                <th class="py-2 px-4">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr class="odd bg-gray-100">
                <td class="py-2 px-4">
                  <a href="https://signal.org/">Signal</a>
                </td>
                <td class="py-2 px-4">
                  <strong>+44 7459 945702</strong>
                </td>
              </tr>
              <tr class="even">
                <td class="py-2 px-4">
                  <a href="https://matrix.org/">Matrix</a>
                </td>
                <td class="py-2 px-4">
                  <strong>
                    <span
                      class="citation"
                      data-cites="james:james-clarke.ynh.fr"
                    >
                      @james:james-clarke.ynh.fr
                    </span>
                  </strong>
                </td>
              </tr>
              <tr class="odd bg-gray-100">
                <td class="py-2 px-4">
                  <a href="https://xmpp.org/">XMPP</a>
                </td>
                <td class="py-2 px-4">
                  <a href="xmpp:james@james-clarke.ynh.fr">
                    <strong>james@james-clarke.ynh.fr</strong>
                  </a>
                </td>
              </tr>
              <tr class="even">
                <td class="py-2 px-4">Email</td>
                <td class="py-2 px-4">
                  <a href="mailto:james@james-clarke.ynh.fr">
                    <strong>james@james-clarke.ynh.fr</strong>
                  </a>
                </td>
              </tr>
              <tr class="odd bg-gray-100">
                <td class="py-2 px-4">
                  <a href="https://tox.chat/">Tox</a>
                </td>
                <td class="py-2 px-4">
                  <a href="tox:61327555F2FDE0AA48A5A5A2DAF97A4B0315D1E5C500AE4FED57158310586B77A083C2AE13EC">
                    <strong>James Clarke</strong>
                  </a>
                </td>
              </tr>
              <tr class="even">
                <td class="py-2 px-4">
                  <a href="https://briarproject.org">Briar</a>
                </td>
                <td class="py-2 px-4">
                  <a href="briar://ab7vjhitw5d5kb5khrj7m2on7dns2kpruk7onjattgbey6uyvi3r4">
                    <strong>James Clarke</strong>
                  </a>
                </td>
              </tr>
              <tr class="odd bg-gray-100">
                <td class="py-2 px-4">
                  <a href="https://telegram.org/">Telegram</a>
                </td>
                <td class="py-2 px-4">
                  <strong>+44 7962 665125</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="bg-blue-100 rounded-lg p-4 my-4">
          <p>
            <strong>Note:</strong>{" "}
            Please note these telephone numbers do not work with SMS/Calling, so
            you have to use them for Signal/Telegram, respectively. I may set up
            a business IP Phone in the near future. Until then, anyone who does
            not want to use any of these other platforms can email me.
          </p>
        </div>

        <div class="bg-yellow-200 rounded-lg p-4 mb-4">
          <p>
            <strong>Warning:</strong>{" "}
            I prefer not to be contacted over Telegram, unless it’s a last
            resort. I may not be able to know you contacted me in a timely
            fashion because Telegram has some problems at the moment.
          </p>
        </div>

        <hr class="my-4" />

        <h2 id="socials-community" class="text-2xl font-bold mb-4">
          Socials &amp; Community
        </h2>
        <div class="bg-blue-100 rounded-lg p-4 mb-4">
          <p>
            <strong>Note:</strong>{" "}
            Join me on my socials to get updates and also engage with the
            community. Although if you want to reach me directly (not interact
            with my posts or the community in general), it’s far easier and
            better to contact me from the details above.
          </p>
        </div>

        <div class="overflow-x-auto">
          <table class="min-w-full bg-white border border-gray-300 divide-y divide-gray-300 rounded-lg">
            <thead>
              <tr>
                <th class="py-2 px-4 border-b">Service</th>
                <th class="py-2 px-4 border-b">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="py-2 px-4">
                  <a href="https://matrix.org/">Matrix Space</a>
                </td>
                <td class="py-2 px-4">
                  <strong>
                    <a href="https://matrix.to/#/#hackers:james-clarke.ynh.fr">
                      #hackers:james-clarke.ynh.fr
                    </a>
                  </strong>
                </td>
              </tr>
              <tr>
                <td class="py-2 px-4">
                  <a href="https://fediverse.party/en/hubzilla/">
                    Hubzilla/Fediverse
                  </a>
                </td>
                <td class="py-2 px-4">
                  <strong>
                    <a href="https://social.james-clarke.ynh.fr/channel/james">
                      james@social.james-clarke.ynh.fr
                    </a>
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
