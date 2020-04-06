import React, { Fragment } from "react";

import { consts } from "config";

import { Link } from "components/ui";

export default [
    {
        summary: "What are the minimum system requirements to run Memurai for Windows?",
        info: "What are the minimum system requirements torun Memurai for Windows?We recommend using Windows 10, Windows Server 2016 or newer. Our team tested Memurai extensively on those operating systems. There are no built-in restrictions to install Memurai on older versions of Windows however we cannot guarantee peak performance and feature parity. At the moment, only 64-bit versions of Windows are supported.",
    },
    {
        summary: "What version of Redis is Memurai compatible with?",
        info: "Memurai is compatible with Redis 5.0.8.",
    },
    {
        summary: "What client libraries are compatible with Memurai?",
        info: "Memurai is fully compatible with the Redis network protocol, so all client libraries compatible with Redis 5 also work with Memurai.",
    },
    {
        summary: "Does Memurai for Windows have any limitations compared to Redis on Linux?",
        info: (
            <Fragment>
                Unix domain sockets are not supported. Besides that, there are a few configuration flags that are not
                supported because they don't apply to the Windows environment. See the&nbsp;
                <Link
                    href={consts.MEMURAI_DOCS_WINDOWS_DIFFERENCE_WITH_REDIS}
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
                Yes, Memurai can be installed as a Windows service during the initial setup or later on using the command line options. See the&nbsp;
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
        info:  (
            <Fragment>
                Please see&nbsp;
                <Link
                    href={consts.MEMURAI_VS_REDIS_LINK}
                    theme="red"
                >
                   our blog post
                </Link>  about the performance metrics.
            </Fragment>
        ),
    },
    {
        summary: "Can I use Memurai as a cache? Or as a primary database?",
        info: "Yes, Memurai can be used as a cache and a primary database.",
    },
    {
        summary: "What are the limitations of the Developer Edition?",
        info: "Memurai Developer Edition is not licensed for production use and after 10 days Memurai shuts down.",
    },
];
