import { cn } from "@/lib/utils";
import {
  HamburgerMenuIcon,
  Cross1Icon,
  MoonIcon,
  SunIcon,
  CaretSortIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
  MagnifyingGlassIcon,
  ClockIcon,
  GearIcon,
  PlusCircledIcon,
  PlusIcon,
  FileTextIcon,
  TrashIcon,
  DotsHorizontalIcon,
  ImageIcon,
  CameraIcon,
  UpdateIcon,
} from "@radix-ui/react-icons";

export type IconsProps = {
  className?: string;
};

export type IconsNames = keyof typeof Icons;

export const Icons = {
  HamburgerMenu: HamburgerMenuIcon,
  X: Cross1Icon,
  Moon: MoonIcon,
  Sun: SunIcon,
  CaretSort: CaretSortIcon,
  DoubleArrowLeft: DoubleArrowLeftIcon,
  DoubleArrowRight: DoubleArrowRightIcon,
  Search: MagnifyingGlassIcon,
  Clock: ClockIcon,
  Gear: GearIcon,
  PlusCircle: PlusCircledIcon,
  FileText: FileTextIcon,
  Plus: PlusIcon,
  Delete: TrashIcon,
  DotsHorizontalIcon: DotsHorizontalIcon,
  Image: ImageIcon,
  Camera: CameraIcon,
  Update: UpdateIcon,
  logo: () => (
    <svg
      className="h-8 w-24 fill-black dark:fill-white"
      viewBox="0 0 87 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.805 1.294l16.6-1.226c2.039-.175 2.563-.057 3.845.875l5.299 3.733c.874.642 1.165.817 1.165 1.516v20.473c0 1.283-.466 2.042-2.097 2.158L7.34 29.99c-1.224.058-1.807-.117-2.448-.934L.99 23.982c-.7-.934-.99-1.633-.99-2.45V3.334c0-1.049.466-1.924 1.805-2.04z"
        fill="#fff"
      ></path>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.405.068l-16.6 1.226C.466 1.41 0 2.285 0 3.334v18.198c0 .817.29 1.516.99 2.45l3.902 5.074c.641.817 1.224.992 2.448.934l19.277-1.167c1.63-.116 2.097-.875 2.097-2.158V6.192c0-.663-.262-.854-1.033-1.42a85.473 85.473 0 01-.133-.096L22.25.943c-1.282-.932-1.806-1.05-3.845-.875zM7.776 5.857c-1.574.106-1.931.13-2.825-.597L2.678 3.452c-.231-.234-.115-.526.467-.584l15.958-1.166c1.34-.117 2.038.35 2.562.758l2.737 1.983c.117.059.408.408.058.408l-16.48.992-.204.014zM5.941 26.49V9.11c0-.759.233-1.109.931-1.168L25.8 6.834c.642-.058.932.35.932 1.108v17.264c0 .759-.117 1.401-1.165 1.459l-18.113 1.05c-1.048.058-1.513-.291-1.513-1.225zm17.88-16.448c.116.525 0 1.05-.525 1.11l-.873.173v12.832c-.758.408-1.456.641-2.039.641-.932 0-1.165-.292-1.863-1.166l-5.709-8.982v8.69l1.806.409s0 1.05-1.457 1.05l-4.017.233c-.117-.234 0-.817.407-.933l1.049-.291v-11.49L9.144 12.2c-.117-.525.174-1.283.99-1.342l4.31-.29 5.94 9.098v-8.049l-1.514-.174c-.117-.643.349-1.11.931-1.167l4.02-.234z"
        fill="#000"
      ></path>
      <path
        d="M41.434 21.251v-7.91h.137l5.704 7.91h1.796V9.627h-1.997v7.902h-.137l-5.704-7.902H39.43V21.25h2.005zM54.715 21.429c2.635 0 4.238-1.724 4.238-4.584 0-2.852-1.611-4.584-4.238-4.584-2.618 0-4.237 1.74-4.237 4.584 0 2.86 1.595 4.584 4.237 4.584zm0-1.676c-1.393 0-2.19-1.063-2.19-2.908 0-1.837.797-2.908 2.19-2.908 1.386 0 2.183 1.071 2.183 2.908 0 1.845-.789 2.908-2.183 2.908zM60.778 10.28v2.215h-1.393v1.595h1.393v4.809c0 1.708.806 2.393 2.828 2.393.386 0 .757-.04 1.047-.097v-1.563c-.242.024-.395.04-.677.04-.837 0-1.208-.386-1.208-1.256V14.09h1.885v-1.595h-1.885v-2.216h-1.99zM65.85 21.251h1.99v-8.813h-1.99v8.813zm.991-10.27c.66 0 1.192-.533 1.192-1.201 0-.669-.531-1.209-1.192-1.209-.652 0-1.192.54-1.192 1.209 0 .668.54 1.2 1.192 1.2zM73.299 21.429c2.634 0 4.237-1.724 4.237-4.584 0-2.852-1.611-4.584-4.237-4.584-2.619 0-4.238 1.74-4.238 4.584 0 2.86 1.595 4.584 4.238 4.584zm0-1.676c-1.394 0-2.192-1.063-2.192-2.908 0-1.837.798-2.908 2.192-2.908 1.385 0 2.183 1.071 2.183 2.908 0 1.845-.79 2.908-2.183 2.908zM78.725 21.251h1.998V16.12c0-1.297.75-2.119 1.941-2.119 1.217 0 1.78.677 1.78 2.022v5.228h1.999v-5.703c0-2.103-1.072-3.287-3.037-3.287-1.314 0-2.2.604-2.619 1.587h-.137v-1.41h-1.925v8.813z"
        fill="currentColor"
      ></path>
    </svg>
  ),
  bookOpen: ({ className }: IconsProps) => (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 48 48">
      <path
        d="M21 40.86H6.09c-1.08 0-1.98-.9-1.98-1.98V20.22c0-1.17.6-1.83 1.74-1.83h.9v-3.36H4.89c-2.49 0-4.5 2.01-4.5 4.5v20.25c0 2.49 2.01 4.5 4.5 4.5H21v-3.42ZM43.14 15h-1.86v3.36h.99c1.08 0 1.62.63 1.62 1.62v18.93c0 1.08-.87 1.98-1.98 1.98H27v3.36h16.14c2.49 0 4.5-2.01 4.5-4.5V19.5c0-2.49-2.01-4.5-4.5-4.5Z"
        fill="#ef4444"
      ></path>
      <path
        d="M39.39 4.5c-5.19.69-11.4 2.73-15.36 5.16-3.99-2.43-10.2-4.47-15.36-5.16v30.75c4.26.51 8.67 1.5 13.14 3.24l2.25.99 2.25-.99c4.47-1.74 8.88-2.76 13.14-3.24V4.5h-.06ZM13.14 31.89V9.69c3.21.57 6.93 2.01 8.64 3.39v21.24c-2.49-1.02-5.97-1.95-8.64-2.43Zm21.75 0c-2.64.48-6.15 1.41-8.64 2.43V13.08c1.68-1.41 5.43-2.82 8.64-3.39v22.2Z"
        fill="#ef4444"
      ></path>
    </svg>
  ),
  target: ({ className }: IconsProps) => (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 49 49">
      <path
        clipRule="evenodd"
        d="m48.2037 9.1569-6.1556 6.2475-.0306-.0613c-3.0319 3.0932-5.2982 3.7975-9.7082 3.3382l-3.1543 3.185c1.1025 2.0212.8268 4.6244-.8575 6.3394-2.0519 2.1131-5.4513 2.1131-7.5644.0612s-2.1438-5.4512-.0613-7.5644c1.6844-1.715 4.2569-2.0212 6.3088-.9494l3.1544-3.185c-.5207-4.41.1225-6.6762 3.1543-9.76933l6.1557-6.2475 1.715 7.04375zm-14.5467 12.7706h.8269v.0612c1.1331 0 2.1438-.1225 3.0931-.3369.2144.9494.3369 1.8988.3369 2.9094 0 7.4113-6.0025 13.4138-13.4137 13.4138-7.4113 0-13.4138-6.0025-13.4138-13.4138 0-7.4112 6.0025-13.4137 13.4138-13.4137.9187 0 1.8375.0918 2.695.2756-.245 1.1944-.3369 2.4806-.245 3.92-.7963-.2144-1.5925-.3675-2.45-.3675-5.2675 0-9.555 4.2875-9.555 9.555s4.2875 9.555 9.555 9.555 9.555-4.2875 9.555-9.555c0-.9188-.1532-1.7763-.3982-2.6031zm8.483-2.5419c.7044-.5206 1.3781-1.1331 2.0825-1.8375l1.5925-1.6231c1.0413 2.6644 1.6538 5.5431 1.6538 8.575 0 12.6787-10.2901 22.9688-22.9688 22.9688-12.6788 0-22.96875-10.2901-22.96875-22.9688 0-12.6788 10.28995-22.96875 22.96875-22.96875 2.8787 0 5.635.55125 8.1769 1.53125l-1.5619 1.5925c-.7044.70438-1.2863 1.40875-1.8069 2.11313-1.5312-.39813-3.1544-.64313-4.8081-.64313-10.1369 0-18.375 8.2381-18.375 18.375s8.2381 18.375 18.375 18.375 18.375-8.2381 18.375-18.375c0-1.7763-.2756-3.4913-.735-5.1144z"
        fill="#3b82f6"
        fillRule="evenodd"
      ></path>
    </svg>
  ),
  doc: ({ className }: IconsProps) => (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 49 49">
      <path
        d="m40.22 14.512-12.33-9.99c-.72-.6-1.65-.93-2.61-.93H11.36c-2.28 0-4.11 1.83-4.11 4.11v33.78c0 2.28 1.86 4.11 4.11 4.11h26.28c2.28 0 4.11-1.83 4.11-4.11v-23.76c0-1.23-.57-2.43-1.53-3.21Zm-13.11-6.81 10.38 9.06c.42.36.18 1.05-.39 1.05h-8.88c-.6 0-1.11-.48-1.11-1.11v-9Zm8.85 33.75H13.01c-.69 0-1.26-.57-1.26-1.29v-31.2c0-.69.57-1.26 1.26-1.26h10.35v10.14c0 2.07 1.68 3.75 3.75 3.75h10.11v18.6c0 .69-.57 1.26-1.26 1.26Z"
        fill="#eab308"
      ></path>
      <path
        d="M17.75 27.232h13.5M17.75 34.402h13.5"
        stroke="#eab308"
        strokeWidth="1.824"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  sparkles: ({ className }: IconsProps) => (
    <svg className={cn("w-6 h-6", className)} viewBox="0 0 24 23">
      <g>
        <path
          fill="#a855f7"
          d="M10.4563 5.72844C10.9113 5.57094 10.9113 5.29094 10.4563 5.11594L7.98881 4.17094C7.55131 4.01344 7.04381 3.50594 6.86881 3.05094L5.92381 0.583437C5.76631 0.128438 5.48631 0.128438 5.31131 0.583437L4.36631 3.05094C4.20881 3.48844 3.70131 3.99594 3.24631 4.17094L0.778811 5.11594C0.323811 5.27344 0.323811 5.55344 0.778811 5.72844L3.24631 6.67344C3.68381 6.83094 4.19131 7.33844 4.36631 7.79344L5.31131 10.2609C5.46881 10.7159 5.74881 10.7159 5.92381 10.2609L6.86881 7.79344C7.02631 7.35594 7.53381 6.84844 7.98881 6.67344L10.4563 5.72844Z"
        ></path>
        <path
          fill="#a855f7"
          d="M22.4788 14.3734C23.8788 14.0234 23.8788 13.4459 22.4788 13.0959L19.3813 12.3259C17.9813 11.9759 16.5463 10.5409 16.1963 9.14091L15.4263 6.04341C15.0763 4.64341 14.4988 4.64341 14.1488 6.04341L13.3788 9.14091C13.0288 10.5409 11.5938 11.9759 10.1938 12.3259L7.09631 13.0959C5.69631 13.4459 5.69631 14.0234 7.09631 14.3734L10.1938 15.1434C11.5938 15.4934 13.0288 16.9284 13.3788 18.3284L14.1488 21.4259C14.4988 22.8259 15.0763 22.8259 15.4263 21.4259L16.1963 18.3284C16.5463 16.9284 17.9813 15.4934 19.3813 15.1434L22.4788 14.3734Z"
        ></path>
      </g>
    </svg>
  ),
  loader: ({ className }: IconsProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
};