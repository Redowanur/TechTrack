export const feautured_categories = [
    { name: 'Laptop', image: 'laptop_fcmwog' },
    { name: 'Smart Phone', image: 'phone_i09qsh' },
    { name: 'Desktop', image: 'computer_lcu07s' },
    { name: 'CPU', image: 'cpu_txe9tm' },
    { name: 'Motherboard', image: 'motherboard_ituegd' },
    { name: 'SSD', image: 'ssd_wwk5js' },
    { name: 'Graphics Card', image: 'graphic-card_br1syj' },
    { name: 'Keyboard', image: 'keyboard_bqw6qi' },
    { name: 'Ram', image: 'ram_hovzvs' },
    { name: 'Router', image: 'wireless-router_vfjhdx' },
    { name: 'Monitor', image: 'lcd_q2ilmv' },
    { name: 'Gaming Chair', image: 'gaming-chair_cftamh' },
    { name: 'Cooling fan', image: 'cooling-fan_h15w9s' },
    { name: 'Case', image: 'case_yb8xdm' },
]

export const menus = {
    'desktop': [
        {link: '/desktop', label: 'Desktop'}
    ],
    'laptop': [
        {link: '/laptop', label: 'Laptop'}
    ],
    'pc-components': [
        { parent: 'PC Components', link: '/pc-components/processor', label: 'Processor' },
        { parent: 'PC Components', link: '/pc-components/cpu-cooler', label: 'CPU Cooler' },
        { parent: 'PC Components', link: '/pc-components/liquid-cooling', label: 'Liquid Cooling' },
        { parent: 'PC Components', link: '/pc-components/motherboard', label: 'Motherboard' },
        { parent: 'PC Components', link: '/pc-components/graphics-card', label: 'Graphics Card' },
        { parent: 'PC Components', link: '/pc-components/ram-desktop', label: 'RAM (Desktop)' },
        { parent: 'PC Components', link: '/pc-components/ram-laptop', label: 'RAM (Laptop)' },
        { parent: 'PC Components', link: '/pc-components/power-supply', label: 'Power Supply' },
        { parent: 'PC Components', link: '/pc-components/hdd', label: 'Hard Disk' },
        { parent: 'PC Components', link: '/pc-components/poratable-hdd', label: 'Portable Hard Disk' },
        { parent: 'PC Components', link: '/pc-components/ssd', label: 'SSD' },
        { parent: 'PC Components', link: '/pc-components/portable-ssd', label: 'Poratble SSD' },
        { parent: 'PC Components', link: '/pc-components/casing', label: 'Casing' },
        { parent: 'PC Components', link: '/pc-components/casing-cooler', label: 'Casing Cooler' },
    ],
    'monitor': [
        {link: '/monitor', label: 'Monitor'}
    ],
    'phone': [
        {link: '/phone', label: 'Phone'}
    ],
    'tablet': [
        {link: '/tablet', label: 'Tablet'}
    ],
    'networking': [
        {link: '/networking', label: 'Networking'}
    ],
    'accessories': [
        { parent: 'Accessories', link: '/accessories/keyboard', label: 'Keyboard' },
        { parent: 'Accessories', link: '/accessories/mouse', label: 'Mouse' },
        { parent: 'Accessories', link: '/accessories/headphone', label: 'Headphone' },
        { parent: 'Accessories', link: '/accessories/mouse-pad', label: 'Mouse Pad' },
        { parent: 'Accessories', link: '/accessories/speaker', label: 'Speaker' },
    ],
    'gadget': [
        { parent: 'Gadget', link: '/gadget/smart-watch', label: 'Smart Watch' },
        { parent: 'Gadget', link: '/gadget/smart-band', label: 'Smart Band' },
        { parent: 'Gadget', link: '/gadget/ear-phone', label: 'Ear Phone' },
        { parent: 'Gadget', link: '/gadget/earbuds', label: 'Earbuds' },
        { parent: 'Gadget', link: '/gadget/neckband', label: 'Neckband' },
        { parent: 'Gadget', link: '/gadget/powerbank', label: 'Power Bank' },
        { parent: 'Gadget', link: '/gadget/tv-box', label: 'TV box' },
        { parent: 'Gadget', link: '/gadget/drone', label: 'Drones' },
    ],
    'office': [
        { parent: 'Office Equipments', link: '/office/printer', label: 'Printer' },
        { parent: 'Office Equipments', link: '/office/projector', label: 'Projector' },
        { parent: 'Office Equipments', link: '/office/photocopier', label: 'Photocopier' },
        { parent: 'Office Equipments', link: '/office/scanner', label: 'Scanner' },
    ],
    'cameras': [
        {link: '/cameras', label: 'Camera'}
    ],
    'servers': [
        {link: '/servers', label: 'Server'}
    ],
    'gaming': [
        {link: '/gaming', label: 'Gaming'}
    ],
    'ips-ups': [
        {link: '/ips-ups', label: 'IPS & UPS'}
    ],
}

export const popularProducts = [
    {
        id: 0,
        name: 'AMD RYZEN 7 7800X3D MSI B650M Motherboard 32GB Ram 512GB SSD Desktop PC',
        image: 'https://www.techlandbd.com/image/catalog/products_2024/desktop-pc-offers.jpg',
        price: '160,000',
        type: 'desktop'
    },
    {
        id: 1,
        name: 'LENOVO G27-20 27 INCH 144 HZ IPS FHD MONITOR',
        image: 'https://www.techlandbd.com/image/catalog/Monitor/Lenovo/lenovo-g27-20-27-inch-fhd-monitor/lenovo-g27-20-27-inch-fhd-monitor-01.jpg',
        price: '27,500',
        type: 'monitor'
    },
    {
        id: 2,
        name: 'Deepcool CH160 Ultra-portable High Airflow mini-ITX Case',
        image: 'https://www.techlandbd.com/image/catalog/Deepcool/deepcool-ch160-mini-itx-case1.jpg',
        price: '5,000',
        type: 'casing'
    },
    {
        id: 3,
        name: 'TCL 40 SE (6/256GB)',
        image: 'https://www.startech.com.bd/image/cache/catalog/mobile/tcl/40-se/40-se-purple-500x500.webp',
        price: '11,999',
        type: 'phone'
    },
    {
        id: 4,
        name: 'MSI MPG 491CQP QD-OLED 49" DQHD 144Hz Curved Gaming Monitor',
        image: 'https://www.startech.com.bd/image/cache/catalog/monitor/msi/491cqp/mpg-491cqp-qd-oled-06-500x500.webp',
        price: '240,000',
        type: 'monitor'
    },
    {
        id: 5,
        name: 'Lenovo Legion Slim 5 16AHP9 Ryzen 7 8845HS AI Integrated RTX 4070 8GB',
        image: 'https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/legion-slim-5-16ahp9/legion-slim-5-16ahp9-01-500x500.webp',
        price: '245,000',
        type: 'laptop'
    },
    {
        id: 6,
        name: 'AMD RYZEN 7 7800X3D MSI B650M Motherboard 32GB Ram 512GB SSD Desktop PC',
        image: 'https://www.techlandbd.com/image/catalog/products_2024/desktop-pc-offers.jpg',
        price: '160,000',
        type: 'desktop'
    },
    {
        id: 7,
        name: 'Dell OptiPlex 7420 Core i5 14th Gen 23.8" FHD Touch All-in-One PC',
        image: 'https://www.startech.com.bd/image/cache/catalog/desktop-pc/all-in-one/dell/optiplex-7420/optiplex-7420-01-500x500.webp',
        price: '136,500',
        type: 'desktop'
    },
    {
        id: 8,
        name: 'Dell Vostro 3020T Core i3 13th Gen Desktop PC',
        image: 'https://www.startech.com.bd/image/cache/catalog/desktop-pc/dell/vostro/dell-vostro-500x500.webp',
        price: '49,000',
        type: 'desktop'
    },
    {
        id: 9,
        name: 'Apple iMac M3 Chip 512GB SSD 24" 4.5K Retina Display Green All-in-One PC (Late 2023)',
        image: 'https://www.startech.com.bd/image/cache/catalog/all-in-one-pc/apple/imac-green/imac-green-01-500x500.webp',
        price: '275,000',
        type: 'desktop'
    },
    {
        id: 10,
        name: 'MSI Modern 14 C12M Core i3 12th Gen 14" FHD Laptop',
        image: 'https://www.startech.com.bd/image/cache/catalog/laptop/msi/modern-14-c12m/modern-14-c12m-01-500x500.webp',
        price: '55,500',
        type: 'laptop'
    },
    {
        id: 11,
        name: 'Lenovo IdeaPad 1 AMD Ryzen 5 7520U 14" FHD Laptop 8GB DDR5 RAM 256GB SSD Sand with 2 Years Warranty',
        image: 'https://www.startech.com.bd/image/cache/catalog/laptop/lenovo/ideapad-1-15amn7-sand/ideapad-1-15amn7-sand-01-500x500.webp',
        price: '57,000',
        type: 'laptop'
    },
    {
        id: 12,
        name: 'AMD Ryzen 5 3400G Processor with Radeon RX Vega 11 Graphics',
        image: 'https://www.startech.com.bd/image/cache/catalog/processor/amd/ryzen-5-3400g/3400g-500x500.jpg',
        price: '8,000',
        type: 'processor'
    },
    {
        id: 13,
        name: 'AMD Ryzen 5 4500 Processor',
        image: 'https://www.startech.com.bd/image/cache/catalog/processor/AMD/ryzen-5-4500/amd-ryzen-5-4500-01-500x500.jpg',
        price: '9,950',
        type: 'processor'
    },
    {
        id: 14,
        name: 'Intel 11th Gen Core i5-11500 Rocket Lake Processor',
        image: 'https://www.startech.com.bd/image/cache/catalog/processor/Intel/core-i5-11500/core-i5-11500-500x500.jpg',
        price: '12,800',
        type: 'processor'
    },
    {
        id: 15,
        name: 'Netac N535N 128GB M.2 2280 SSD',
        image: 'https://www.startech.com.bd/image/cache/catalog/ssd/netac/n535n-128gb/n535n-128gb-500x500.jpg',
        price: '1,850',
        type: 'ssd'
    },
    {
        id: 16,
        name: 'Digital X 650VA Offline UPS',
        image: 'https://www.startech.com.bd/image/cache/catalog/ups/digital-x/650va/650va-500x500.jpg',
        price: '3,050',
        type: 'ips-ups'
    },
    {
        id: 17,
        name: 'Apple iPad 10.2 inch 9th Gen 64GB Wi-Fi Space Gray (MK2K3ZP/A)',
        image: 'https://www.startech.com.bd/image/cache/catalog/tablet/apple/ipad-9th-gen/ipad-9th-gen-space-gray-01-500x500.webp',
        price: '42,500',
        type: 'tablet'
    },
    {
        id: 18,
        name: 'T-WOLF T15 104 Keys USB Wired Keyboard',
        image: 'https://www.startech.com.bd/image/cache/catalog/keyboard/t-wolf/t15/t15-01-500x500.webp',
        price: '450',
        type: 'keyboard'
    },
    {
        id: 19,
        name: 'Black Shark GT3 Neo ENC Bluetooth Calling Smart Watch',
        image: 'https://www.startech.com.bd/image/cache/catalog/smart-watch/black-shark/gt3-neo/gt3-neo-06-500x500.webp',
        price: '2,199',
        type: 'smart-watch'
    },
    {
        id: 20,
        name: 'Haylou GT7 Neo True Wireless Earbuds',
        image: 'https://www.startech.com.bd/image/cache/catalog/earbuds/xiaomi/haylou-gt7-neo/haylou-gt7-neo-03-500x500.webp',
        price: '1,850',
        type: 'earbuds'
    },
    {
        id: 21,
        name: 'Xbox Wireless Controller 1914 White',
        image: 'https://www.startech.com.bd/image/cache/catalog/game-pad/microsoft/xbox-wireless/xbox-wireless-02-500x500.webp',
        price: '8,200',
        type: 'gaming'
    },
    {
        id: 22,
        name: 'Toten 9U 600 x 450mm Server Rack',
        image: 'https://www.startech.com.bd/image/cache/catalog/server-rack/toten/el265-9-9u/el265-9-9u-01-500x500.webp',
        price: '12,500',
        type: 'servers'
    },
    {
        id: 23,
        name: 'Wavlink WL-WN529K2 300Mbps Smart Wi-Fi Omnidirectional Router',
        image: 'https://www.startech.com.bd/image/cache/catalog/router/wavlink/wl-wn529k2/wl-wn529k2-500x500.jpg',
        price: '990',
        type: 'networking'
    },
    {
        id: 24,
        name: 'Cheerlux C8 1800 Lumens Mini LCD Projector',
        image: 'https://www.startech.com.bd/image/cache/catalog/projector/cheerlux/c8-mini/cheerlux-c8-01-500x500.jpg',
        price: '8,500',
        type: 'projector'
    },
    {
        id: 25,
        name: 'EKEN H9R 4K Wifi Waterproof Action Camera With Remote Control',
        image: 'https://www.startech.com.bd/image/cache/catalog/camera/action/eken/h9r-500x500.jpg',
        price: '5,500',
        type: 'cameras'
    },
]