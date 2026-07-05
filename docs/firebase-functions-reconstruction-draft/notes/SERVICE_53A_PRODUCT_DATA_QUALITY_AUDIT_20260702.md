# SERVICE 53A PRODUCT DATA QUALITY AUDIT

Generated: 2026-07-02T06:52:52.747Z
Mode: READ ONLY.

Purpose:
- Detect published product data that may trigger customer app red screen.
- Prepare human-safe fallback and Admin Web correction workflow.

## Summary
TEXT_START
PRODUCTS_TOTAL: 695
PRODUCTS_PUBLISH_TRUE_TOTAL: 668
PRODUCTS_DATA_QUALITY_RISK_TOTAL: 62
RESTAURANT_PRODUCT_RISK_TOTAL: 22
FASHION_PRODUCT_RISK_TOTAL: 12
TEXT_END

## Risk Types
TEXT_START
PRODUCT_RISK_TYPES: {"photo_missing":62}
TEXT_END

## Limited Examples
TEXT_START
RISK_PRODUCT | id=0UvkVonvmUBNthvU5lVJ | name=Watch | vendorID=yKPZbkrbedZjfmeSLKWi | section_id=6285dd3281531 | categoryID=62ecfdfb02b2a | price=38 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=1Lp01DrsCCMd4eMLWItA | name=redbucket | vendorID=jh6HrTtddBEuMxRXpCEA | section_id=6285ddbfd9598 | categoryID=63a2b7478c6a5 | price=4 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=27liouMiOOi8b8koMt18 | name=PULLA | vendorID=FeSc5HZvVSxMDrOEl6tH | section_id=6285ddbfd9598 | categoryID=62eceea3c1cd9 | price=30 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=2iaQ11YtC3DbAs1dHFcC | name=Ai | vendorID=5y18JEaVzjJS3V94RBvX | section_id=6285ddbfd9598 | categoryID=62ecedf41a7fe | price=10 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=4do2QclirTx9cxq4zjeh | name=Women's Top | vendorID=o5xe3oLlHFxYiY8IOmLa | section_id=6285dd3281531 | categoryID=636b70cc5a600 | price=130 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=56u25aI2JUzgBmLwPIeh | name=Chicken 🍗 Masala | vendorID=w7venRoQGoxxTYVFMGOp | section_id=6319dc53314ee | categoryID=OvjEAidyRSeuoH81pK4O | price=560 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=63a93e782e750 | name=test | vendorID=XAWsfpI1Eruu0dogkekJ | section_id=6285dcf511651 | categoryID=62ecf35007e34 | price=200 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=63a9760fd52fc | name=Eternity Cream | vendorID=Brtp5RD5VOdyGxA8c6vv | section_id=6285dcf511651 | categoryID=62ecfa2615a59 | price=350 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=63aac398c316b | name=test item 2 | vendorID=XAWsfpI1Eruu0dogkekJ | section_id=6285dcf511651 | categoryID=62ecf35007e34 | price=200 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=63aadcbb5ad63 | name=test | vendorID=4bZg2TXp193BLBY214kp | section_id=6285dd3281531 | categoryID=62ecfdfb02b2a | price=200 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=63aae29cbfda5 | name=Jeans | vendorID=4bZg2TXp193BLBY214kp | section_id=6285dd3281531 | categoryID=62ecfdfb02b2a | price=1000 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=63e68abcc846f | name=marzorcaa | vendorID=dfj7VOR9rFA568IbJmz2 | section_id=6285ddbfd9598 | categoryID=62cd5926d5186 | price=30 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=640096c45af31 | name=burger | vendorID=anmFzDxgGLfZHb8oM0N9 | section_id=6319dc53314ee | categoryID=88pNxhccktxkSgIndZ8e | price=150 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=646b8adf13bf5 | name=Moda do futuro | vendorID=bwPnIO8wxBIFer9pIxFx | section_id= | categoryID=62ecfdfb47287 | price=35 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=646ec79605f08 | name=asdfasdf | vendorID=0hB8mx1z1DeNR9CAzXfh | section_id=6285ddbfd9598 | categoryID=62cd5926d5186 | price=10 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=6479eee26d445 | name=boat smartwatch | vendorID=05vPfo6g0mVhZZVlz6mB | section_id= | categoryID=6478464d29935 | price=123 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=647be55b11c00 | name=Burger | vendorID=zAaZBgQGAiRe8rmoV9XM | section_id=undefined | categoryID=642441a252ab9 | price=1000 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=648255a46f976 | name=brand | vendorID=VRqDnJFlIaX2mj6md0GD | section_id=6285dcf511651 | categoryID=62ecf35007e34 | price=1500 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=648259faf0827 | name=ال | vendorID=VRqDnJFlIaX2mj6md0GD | section_id=6285dcf511651 | categoryID=62ecfa2591016 | price=1200 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=6494487468e70 | name=roll | vendorID=22IVF6moR0lkuE076H2i | section_id=6285ddbfd9598 | categoryID=62ecedf41a7fe | price=499 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=6496d406d9570 | name=glo  | vendorID=P4i4hdnoHPUaGJIQkT7A | section_id=undefined | categoryID=62ecfa2615a59 | price=56 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=649f6f47e5aa8 | name=Vitamin c cream | vendorID=pkt5oAGOoVSgxfu3LsZv | section_id=6285dcf511651 | categoryID=62ecfa2615a59 | price=200 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=64d4c22019427 | name=LIpstick | vendorID=QFro6I1hF6VYTlLal5W8 | section_id=undefined | categoryID=62ecfa264e7d8 | price=399 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=64f097c9157d4 | name=fashion skirt | vendorID=qrY05wReKt6PRlY3dZy2 | section_id=undefined | categoryID=636b70cc5a600 | price=4000 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=64f098be877fa | name=grocery | vendorID=Cnu1AaDPRRbnv6quSIrg | section_id=undefined | categoryID=64e2e7735131c | price=5000 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=6x1ERMPXYk1KXmTosnI2 | name=Hamburguesa | vendorID=hRJnICFBb0ayBfzrvj1D | section_id=6285ddbfd9598 | categoryID=62ecf0f1c144b | price=15 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=7iRGD7Gufd6uqTsYBcaZ | name=Fried Rice | vendorID=WGHlinafUtj7WH4SJkst | section_id=6285ddbfd9598 | categoryID=63a2b7478c6a5 | price=3500 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=8K7QRTXUAJpb7wlDWVZl | name=Titan Watch | vendorID=o5xe3oLlHFxYiY8IOmLa | section_id=6285dd3281531 | categoryID=628c79e14b7e4 | price=250 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=ABAJY27mPmyKGulRVSMh | name=Stylish Watch | vendorID=05vPfo6g0mVhZZVlz6mB | section_id=6285dd3281531 | categoryID=636b70cc5a600 | price=49 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=AjJXuT4NTmVVsQeRLlFG | name=pretty Girl Gown | vendorID=o5xe3oLlHFxYiY8IOmLa | section_id=6285dd3281531 | categoryID=636b70cc5a600 | price=100 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=F6hKMeffH2dqGumC5k3U | name=D | vendorID=M4LJITqRlFGmflgN6Kwu | section_id=6285ddbfd9598 | categoryID=62cd5926d5186 | price=100 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=IsCVPYRRsUBg9zP2QCZC | name=Matches | vendorID=QtdZ9AfIhP2qsAi8LOPd | section_id=6319dc53314ee | categoryID=64e2e7735131c | price=2 | photoType=string | photosType=array | item_attributeType=undefined | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=LI4ml8XxT8JhiNadOxyx | name=demo | vendorID=uqUs7O7qeUaYuSU2wmkC | section_id=6285dd3281531 | categoryID=628c79e14b7e4 | price=10 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=MpzP1ea6AGgQ0ayD4V3v | name=Hiijh | vendorID=MHSmeGrhtaxgpyTao8qH | section_id=6285ddbfd9598 | categoryID=62e3735c7df56 | price=50 | photoType=string | photosType=array | item_attributeType=undefined | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=NijPiFWiNG45lunMDyON | name=Dryer | vendorID=KS2Kjgdm5RRWT7LJSwZz | section_id=6285dcf511651 | categoryID=62ecf35007e34 | price=10 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=QPZGKoLei4qc7oi5zo31 | name=Test One | vendorID=anmFzDxgGLfZHb8oM0N9 | section_id=6319dc53314ee | categoryID=636e30433dd7e | price=10 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=QuFolf3RrlJpxqFrDUAF | name=بطاطا ١ | vendorID=iCvbt48Ui15j6QlTwbOy | section_id=6285ddbfd9598 | categoryID=63a2b7478c6a5 | price=100 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=RoSPZ8Rf56BPCLIm4NmH | name=شيبسي | vendorID=HELaZcmXhBC397uwRAj4 | section_id=6285ddbfd9598 | categoryID=62ecf0f1c144b | price=5 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=RvUoIZ9jqJR07lkY02Zf | name=سيبس | vendorID=iCvbt48Ui15j6QlTwbOy | section_id=6285ddbfd9598 | categoryID=63a2b7478c6a5 | price=111 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=RwU9gIBtyhMiAlw2TZvF | name=Test | vendorID=lMSSJEGJKLwjHdvkdmWS | section_id=6285dd3281531 | categoryID=628c79e14b7e4 | price=300 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=Sda3j01eufplSJ5ZbPbO | name=Test | vendorID=ih4O5y3UTeFSa43LtFJK | section_id=6285ddbfd9598 | categoryID=62e3735c7df56 | price=2 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=XKeKEkK7ED5hITtvDXEJ | name=Product Test  | vendorID=YWuKr2EWd7TFcqwhGEhF | section_id=6285dcf511651 | categoryID=62ecfa2615a59 | price=100 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=XXviGhKAhTLF60EOGHvV | name=Hell | vendorID=Dmq8xdXhmMk8rlONHfCm | section_id=6285dd3281531 | categoryID=628c79e14b7e4 | price=33 | photoType=string | photosType=array | item_attributeType=undefined | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=ZumxYjbFVZIg7CJvrQiC | name=Abc | vendorID=LP33gvJZ3RdcoXUhvCUE | section_id=6319dc53314ee | categoryID=64e2e7735131c | price=100 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=aceh_product_aceh_clone_6285dcf511651_Brtp5RD5VOdyGxA8c6vv_63a9760fd52fc | name=Eternity Cream | vendorID=aceh_clone_6285dcf511651_Brtp5RD5VOdyGxA8c6vv | section_id=6285dcf511651 | categoryID=62ecfa2615a59 | price=350 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=aceh_product_aceh_clone_6285dd3281531_05vPfo6g0mVhZZVlz6mB_6479eee26d445 | name=boat smartwatch | vendorID=aceh_clone_6285dd3281531_05vPfo6g0mVhZZVlz6mB | section_id= | categoryID=6478464d29935 | price=123 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=aceh_product_aceh_clone_6285dd3281531_05vPfo6g0mVhZZVlz6mB_ABAJY27mPmyKGulRVSMh | name=Stylish Watch | vendorID=aceh_clone_6285dd3281531_05vPfo6g0mVhZZVlz6mB | section_id=6285dd3281531 | categoryID=636b70cc5a600 | price=49 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=aceh_product_aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh_646ec79605f08 | name=asdfasdf | vendorID=aceh_clone_6285ddbfd9598_0hB8mx1z1DeNR9CAzXfh | section_id=6285ddbfd9598 | categoryID=62cd5926d5186 | price=10 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=fbyGSJHma8tglNqMRtIL | name=Cgccc | vendorID=mPJBgocVgLFZA0Eaogcm | section_id=6285ddbfd9598 | categoryID=62cd5926d5186 | price=55 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=g3RWdXD5Vud6YYXmLhhv | name=Sandwich  | vendorID=YNfIy28bZ4YNn4nVhp0v | section_id=6285ddbfd9598 | categoryID=62cd5926d5186 | price=20 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=gNRtVc8Dl9GInv9wbsG1 | name=I PHONE | vendorID=Z20OH3qj3VFzoYM05Pxq | section_id=6285ddbfd9598 | categoryID=62e3735c7df56 | price=600 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=hAxp8YqeHv8anfdKZ9Is | name=Red Roses | vendorID=rSuQmLFweh5575qX7P7x | section_id=6285dd7b50f32 | categoryID=62ecff6b9816b | price=1500 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=hrDpJxHqitWPLa45xldo | name=brand | vendorID=O7mMEnwPLz1UCQ4PFrRy | section_id=6285dcf511651 | categoryID=62ecf35007e34 | price=1500 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=je2Wjhx273ozzQMNMpag | name=Test One | vendorID=anmFzDxgGLfZHb8oM0N9 | section_id=6319dc53314ee | categoryID=636e30433dd7e | price=100 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=op5l3CBcGG2ZmcpDA0LS | name=Test One | vendorID=t5PZX0hHfavCDhojPty3 | section_id=6319dc53314ee | categoryID=zGhiepckNthq5FILtM4Eb | price=300 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=qPFeteCaWugIoGmZYff8 | name=Pizza | vendorID=hRJnICFBb0ayBfzrvj1D | section_id=6285ddbfd9598 | categoryID=63aaf0142902b | price=10 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=qyPk7ROFpXwWvkQsVHru | name=demo | vendorID=lMSSJEGJKLwjHdvkdmWS | section_id=6285dd3281531 | categoryID=628c79e14b7e4 | price=10 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=rsM0HWEvZfTT5sNpDaa2 | name=Pizza | vendorID=kDAxvdDczBhEAnZCUxLv | section_id=6285ddbfd9598 | categoryID=62cd5926d5186 | price=100 | photoType=string | photosType=array | item_attributeType=Object | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=tMGDjLTFMdqsI1cmnyZd | name=Haitglo | vendorID=2180jyLGdGzk0WVrblGc | section_id=6285dcf511651 | categoryID=62ecf35007e34 | price=200 | photoType=string | photosType=array | item_attributeType=undefined | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=twnCGrABiUeVKIPVGh8M | name=Sampl | vendorID=ZRHaARE0I0rWrl1Rwprv | section_id=6285ddbfd9598 | categoryID=63aaf0142902b | price=120 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=x8DLrSbjKVHpxtNHGyMx | name=Tes | vendorID=rIY8fJpAqGTKaBpw68yi | section_id=6319dc53314ee | categoryID=zzq4LngLd8PWzYJfsvnjfV | price=20 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
RISK_PRODUCT | id=yhjCYXn9UQ6Y2SpTA8ro | name=Sandwich | vendorID=fV3dfZNHm2Y4v8DGtygT | section_id=6285ddbfd9598 | categoryID=62ecf0f1c144b | price=48 | photoType=string | photosType=array | item_attributeType=null | itemAttributeType=undefined | risks=photo_missing
TEXT_END

## Recommended Human-Safe Fallback
TEXT_START
CUSTOMER_APP_FALLBACK_PHOTO: show placeholder image when photo/photos is missing.
CUSTOMER_APP_FALLBACK_PRICE: show 'Harga belum diatur' and disable add-to-cart when price invalid.
CUSTOMER_APP_FALLBACK_NAME: show 'Produk belum lengkap' when name missing.
CUSTOMER_APP_FALLBACK_ATTRIBUTE: treat null/invalid item_attribute/variant fields as empty list.
ADMIN_WEB_WARNING: show product completeness status so operator/vendor can fix missing input.
TEXT_END

## Final Status
STATUS: SERVICE_53A_PRODUCT_DATA_QUALITY_RISK_FOUND