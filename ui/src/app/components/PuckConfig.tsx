import React from "react";
import type { Config } from "@measured/puck";
import VisualImageWithHeading from "./VisualImageWithHeading";
import DefaultFeatureList from "./DefaultFeatureList";
import FeaturesListCard from "./FeaturesListCard";

type Components = {
  VisualImageWithHeadingBlock: {};
  DefaultFeatureListBlock: {};
  FeaturesListCardBlock: {};
};

const PuckConfig: Config<Components> = {
  components: {
    VisualImageWithHeadingBlock: {
      label: "Visual Image With Heading",
      fields: {
        title: {
          type: "text",
        },
        description: {
          type: "textarea",
        },
        allProductsBtn: {
          type: "text",
        },
        advisorBtn: {
          type: "text",
        },
        bannerImg: {
          type: "text",
        },
      },
      defaultProps: {
        title: "Payments tool for software companies",
        description:
          "From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.",
        allProductsBtn: "Get Started",
        advisorBtn: "Speaks to Sales",
        bannerImg:
          "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png",
      },
      render: ({
        title,
        description,
        allProductsBtn,
        advisorBtn,
        bannerImg,
      }: any) => {
        return (
          <>
            <VisualImageWithHeading
              title={title}
              description={description}
              allProductsBtn={allProductsBtn}
              advisorBtn={advisorBtn}
              bannerImg={bannerImg}
            ></VisualImageWithHeading>
          </>
        );
      },
    },
    DefaultFeatureListBlock: {
      label: "Default Feature List",
      fields: {
        title: {
          type: "text",
        },
        description: {
          type: "textarea",
        },
        items: {
          type: "array",
          arrayFields: {
            title: { type: "text" },
            description: { type: "text" },
          },
          defaultItemProps: {
            title: "Lorem ipsum",
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
          },
        },
      },
      defaultProps: {
        title: "Designed for business teams like yours",
        description:
          "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
        items: [
          {
            title: "Marketing",
            description:
              "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
          },
          {
            title: "Legal",
            description:
              "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
          },
          {
            title: "Business Automation",
            description:
              "Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.",
          },
          {
            title: "Finance",
            description:
              "Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.",
          },
          {
            title: "Enterprise Design",
            description:
              "Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.",
          },
          {
            title: "Operations",
            description:
              "Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
          },
        ],
      },
      render: ({ title, description, items }: any) => {
        return (
          <DefaultFeatureList
            title={title}
            description={description}
            items={items}
          ></DefaultFeatureList>
        );
      },
    },
    FeaturesListCardBlock: {
      label: "Features List Card",
      fields: {
        title: {
          type: "text",
        },
        description: {
          type: "textarea",
        },
        items: {
          type: "array",
          arrayFields: {
            title: { type: "text" },
            description: { type: "text" },
          },
          defaultItemProps: {
            title: "Lorem ipsum",
            description:
              "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.",
          },
        },
      },
      defaultProps: {
        title: "Secure platform, secure data",
        description:
          "Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.",
        items: [
          {
            title: "Marketing",
            description:
              "Plan it, create it, launch it. Collaborate seamlessly with all the organization and hit your marketing goals every month with our marketing plan.",
          },
          {
            title: "Legal",
            description:
              "Protect your organization, devices and stay compliant with our structured workflows and custom permissions made for you.",
          },
          {
            title: "Business Automation",
            description:
              "Auto-assign tasks, send Slack messages, and much more. Now power up with hundreds of new templates to help you get started.",
          },
          {
            title: "Finance",
            description:
              "Audit-proof software built for critical financial operations like month-end close and quarterly budgeting.",
          },
          {
            title: "Enterprise Design",
            description:
              "Craft beautiful, delightful experiences for both marketing and product with real cross-company collaboration.",
          },
          {
            title: "Operations",
            description:
              "Keep your company’s lights on with customizable, iterative, and structured workflows built for all efficient teams and individual.",
          },
        ],
      },
      render: ({ title, description, items }: any) => {
        return (
          <>
            <FeaturesListCard
              title={title}
              description={description}
              items={items}
            ></FeaturesListCard>
          </>
        );
      },
    },
  },
  root: {
    render: ({ children }) => {
      return <div>{children}</div>;
    },
  },
};

export default PuckConfig;
