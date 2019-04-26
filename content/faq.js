import React, { Fragment } from "react";

import { consts } from "config";

import { Link } from "components/ui";

export default [
    {
        summary: "What are the minimum system requirements to run Memurai for Windows?",
        info: "Memurai runs on Windows 7 / Windows Server 2008 R2, or higher. Windows 10 / Windows Server 2016, or higher, are recommended for optimal performance. At the moment, only 64-bit version of Windows are supported.",
    },
    {
        summary: "What version of Redis is Memurai compatible with?",
        info: "Memurai is compatible with Redis 5.",
    },
    {
        summary: "What client libraries are compatible with Memurai?",
        info: "Memurai is fully compatible with the Redis network protocol, so all client libraries compatible with Redis 5 also work with Memurai.",
    },
    {
        summary: "How much will Memurai cost?",
        info: "Memurai will have a tiered pricing scheme that will fit different users' needs. The details are not available yet, but there will be a free edition aimed at development use.",
    },
    {
        summary: "Does Memurai for Windows have any limitations compared to Redis on Linux?",
        info: (
            <Fragment>
                Unix domain sockets are not supported. Besides that, there are a few configuration flags that are not
                supported because they don't apply to the Windows environment. See the&nbsp;
                <Link
                    href={consts.MEMURAI_DOCS_WINDOWS_DIRRERENCE_WITH_REDIS}
                    theme="red"
                >
                    documentation
                </Link> for more information.
            </Fragment>
        ),
    },
    {
        summary: "Can I run Memurai as a Windows service?",
        info: (
            <Fragment>
                Yes, Memurai can be installed as a Windows service during the initial setup or later on using the
                command line options. See the&nbsp;
                <Link
                    href={consts.MEMURAI_DOCS_WINDOWS_SERVICE_LINK}
                    theme="red"
                >
                    documentation
                </Link> for more information.
            </Fragment>
        ),
    },
    {
        summary: "How fast is Memurai for Windows?",
        info: "Perfomance is at par with Redis on Linux.",
    },
    {
        summary: "Can I use Memurai as a cache? Or as a primary database?",
        info: "Yes, Memurai can be used as a cache and a primary database.",
    },
];
