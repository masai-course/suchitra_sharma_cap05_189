import {
    Image, Flex, Box, Heading, Spacer, Input, InputRightAddon, InputGroup,
    Link, HStack
} from "@chakra-ui/react"

export default function SearchNavbar() {
    return (
        <>
            <Flex bg={"black"} padding={2} >

                <Image
                    // borderRadius='full'
                    boxSize='90px'
                    // src='https://1000logos.net/wp-content/uploads/2020/07/SUGAR-Cosmetics-Logo1.jpg'
                    src="https://offers.getsimpl.com/wp-content/uploads/2021/07/Logo-SugarCosmetics.png"
                />
                <Heading letterSpacing={1} color={"white"} padding="15px" paddingStart={0} fontSize={"25px"}>
                    SUGAR |
                </Heading>
                <InputGroup w={"650px"} marginStart={"20px"} padding={"15px"} >
                    <Input placeholder='Try "liquid lipstick"' />
                    <InputRightAddon>🔍 Search</InputRightAddon>

                </InputGroup>
                <Spacer />
                <Link padding="30px" color='teal.500' href='#'>
                       🙋‍♀️🙋‍♂️ Login/Register
                </Link>
                <Spacer/>
                <HStack paddingStart="10px">
                <Image borderRadius="2px" boxSize="30px" src="data:image/png;base64,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"/>
                <Image  boxSize="30px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-MlKEqihZYoLn24ohoFYkJiDJNOfpm3wlv-japdhrA9JwSfpgvL6GSZPB5F21SeYpUE&usqp=CAU"/>
                <Image boxSize="30px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABIFBMVEWfHSD////v7+/u7u75+fn19fXy8vL8/PyXAACfHB+ZAACVAACeGRycAACeHB+SAACiAACcFBerAACmAACxAAD/+fqbDBD6//+YAAfx4uOaCg7+8fKaERT69fX76+zw0dP54OHPbXK6AADRSE/ctrb10dPIO0HvxMfqu7332tyiERaxMze7QkfQhYioJSnRnZ7vtri3VVfTqquuR0nFU1jIj5CyY2TAeHnEKTDALzXomp7lqq3UXmTUe32yGB/geX7OZ2ztk5juoKSyABC8GyKiLzG9cHLew8OtVle7cXLTkJKfJynBZGfl1dW8goLMdnnInJ3HTFHhiY3ec3i+O0D0srbDABTHGSatCRPXWmDha3LLMTnOfoG+S06uTU6pPkAdBShPAAAgAElEQVR4nN1daUPaShcmECDLJBC2BBICLsiiIG5VwK0utdfaekXba/u29f//i3e27GHzotJ7vrSMcDJPZubsMxNhLIpHKSXsJqslxtpNMaspabWwdtMoVslQVuViYnZWs/cqGnl5hIN6KKv+Zvy/gvBuuRzCqnrcy/9HEDaPxaMQVodatsH+NxAOpEi2HmBVkeTSkhoLskok/jSE+QclopxXE15Wes+IyBeVIKt4pRtfWISJbiWEVT0nRyLCYdnLaihFIpH0EA+im1W8uHa0sAhjzM9cLcjqSIRYIlKfzEjKqpYBsFFeZhJeVqy5JhzmXwxhjJKLl9Xk4mWRixcl5kG7qPtZVTsIS8S4qMUdVmU4cxFxg7iHFVNck+ROFT52fr2KReIWsTZN1RQPNDE5oDx2Gc/vmLMsxhLReqr9Q6YvkUbjsOxmxZorWkTOVZNTdmGqXrGR4Jgng6LDnolRuylhNcXtplwkAtJ91s2KWQYETCQ1tFixjRxti2RqDqsYW/wHIZe67mn373s1G8Koi5fVYvOqC2htZSBEZ/o0BAsMn2kQVlH1oGA1aocOq0RxBbdrR7MiHNureSIcYJkCskPV/lLyXrPARJQDHTXFk/203SYfNykrOIJr5LvK2sIifC+SXmd/2qya57KNJiId4baau027JqwQQLo4+Z6+qAiXSqSLQPphNbUlBwyUIVjS3mmuNnCQRKwgQLuZL9WDCOvl10aYD/LKnypWH1OHOmm6UFxoIkbPhCPtBg0F0BkSD1TI0LH+6kdYvfuWf22EZ3024eNldnhbqkh3GGI360ETSZ8wzRzwNJVWdCbBFldcuKWhD+HgWOqpr42wm7qrq3Fsc1m8qjnX+hJ6SIScFjxoIrLU/V7yNkWyXUa1hAwFvZt3Gym1NQEoUyMM0RYJi9gkJdZuSo5qYppCK3NYVVFLnDZVPAOm9epMMSv74MjfWr6WiPHA2EKGfilXTtqd0o8k+E5Ab5peQYpbLXG76XlWW7yZiwDh4it5k5jUa+8CKy1Xh6IfTsQPGcufO+8vI5mq3YXGQxrNff6g+HyrzUFoDfkUNm7CRGaJIT3UrbkSU38K3n4ay+cBOGEEcpqvRezT55mHGQO3wFkan9yrufoWLDa85ML5iamS1a3e+RZdhOcjzyPunsDprlkvzViJv7b3pFKxAoTHAYuDEWzvuYACpOziATyRbF1TeAOE3yyhD7IrdTYRS9QugmvsmWQcVOEAHksOw9dHGGNshNAGyZwU1XhXCu3tsyhb05cybmPhLRBuGK4OSMtn+XkibN3nvGL49dehDyF0Cw8PA5ru+cS3fDPeWFEDvYLKclaEs8QLfAih+jufm6AJIS9C+PxoXK1XptSHFlTHbU3aTc73A+PrN8helrQlX6/Mq8PlZrBXz7dLVZu91XLrV9MvjtBlhDaHvTS3bo6xvGeMYtR2u1U27uV19Pg2COPx5uB/WRGgYMf8fAvzMt07rJehv+TEfFyhiNdCGIsm4vnG/bGERYD4fp7e0yknlzK9YT3hWIeDV0cYVdna9UFapGI23ZwnwgHSdUB6PBjWdNq0+toIGXPw/VEClhqRc+o8EZoZzFhWpMyvPglr1+eo4KdAeFtcupAKLi2p9Obq4+c3HBs4lc31a3mm/qpjCA7SnNcISPenRhgLaPWk3WR/68itG+T04+6wfzw3Q3sK4gMPy9ZdWt0dxaDkQshOQarP6JRLoi+g9NrEd5rTdBznLWysY6y2RJV/W0ABMnbL0XlGMaLJNWPyU1+TuB/qfH0LdfiqonMySQ12vgiTlcxbY/JSrpiYs3/oCmgvAoGD8rw94PzpQi1E7Yj1IYyFFK7MhJAJie6+IUmDuAchq0LDqzjZxx+HsLZIoga0agkHoV6pDY52l5fR0pxhDHEqwraBIK9vC6QRwYEej7PJcr7a7Z+eroB0Nm2kh8hND0YlomFWW7RSjauQHMuHjTGBkPYbknGarHevlx6Wc1mxZBjIpuOPTdTRMKvNNRMthInBt97K4fWgXq2aeQpaHWQnP/m1qHXR0yRJA8AxV7U27uiUvkU0uiEaJSmbyR0/nP4cnnXrzSJTXSR9Ics+U1xO67MgjLH1NHEIeaOkcaLI5XK5fy7eAsq0pJ0yMyGMxu+88V2Id4EETZCgcJ0RYaKxYFbaBEp9Z2ZEGGUD+fZFJjnTnBVhTP2jBtG4S45BOCKKwf74cwaRz9atvofpwxFlDGrtzxlElF0cXVAStEutKMbKHzOIma5dhzmTb1F7XCAVP46MX7otTGbznr4vlMM0mlKD53rAZu41Q6LPJpB7vo9/8kesRKn/fIT18z9gEJV10x0ymw0hc/iqid7nUeGHbpqmbpYTcTbuimuMiWK4Yt71P0AntnqdTudh5fv90dHwPXL0mlWdcWfenLxFcKtCMvknGDYyz/OgUCqVCprIiSkBenqZ/+kOnBCrjYGmQZwtl+HI9/+AQfSTLIPzZjzE8o6SPQRmtVbvDq6H97u9b98yuckMF5AyAzYsTlPs/7xbWekdHCualJYkSQFgoZ3e0STdq6HeU2IgaYUCxPXsstCXpinfuNEz4+H+ITN81cT1TAQEThTW15XJ34zIy1Wk98I94FNhMoM3IT7yc/C5aNanMJTlR7LTMRyhebEoykEGinutgA0cKyyKkxdQ+oRowhFRjNrjQggXRWtd/r50dYUXiqivZW4iQqWnk0DGqCjGWwS2eaBonDtloGxcVar5TfeSEQnC1qQBAJl6PBDFcFltEOVQem1jWymtb+3vvXNBFPZwfy5dcoW7Qi2usp4RlBk4dml4pUIi//DSSxEYmiBohjUayseiCRfZJud8Q1jF/dl2N5GsxM2E7BB3n3cQjvAt2GrvRZO9Cids7W1v7+1KIhkPsEP2gDlikqfx6/xH52VzZOvi5nhfRzsoMxMRxtj6nGuBgAIHjUoIntvZTGAXLp8c7OAxAutV9Lmasn+gPNEO1Z220lZgWEOe1GkmpvEP2bO5WNtQfhSgmk6JHL9x+zeZXQq3p9uPY/QvSPjzJXJMgYNGu7G+sW5PysIOblgdp7BlqatO5wGrJ//OtuFLGsdxWH7sdWt43jRxZk5JNxgP4aJOCQsRRrBnDmdLi4qdWQeXuOv1whh1URqysekQJvR/Zdvwnz4uXV99xvLDIvMJ9p/XuoyPrjlLTDIdW0yKn+2/v7N3zkbIXB5jM4O1apKdapZCZZk/mCWjzQOgQbKMkNJHPw646n7D/ovX9FNttV6l/31UIsI2/t+u9UjQQelqE6daKilrARdw3D55OVpdgMfeYd8u8J2036K5Po20wTJEEDrrO+8gbbWIxWE8MUF6V4IiBSfamcZlQRAKbfKy4cIqkdxm2xquwgf08eo3bt23xCnVIE/jXj0QpMeDw0FTJwhtfRh2GAPzdQrbRhDA7s/tqysUF0Hj1LxOIUUDLvOMl5LVxg6w9HhDNOCLANxPOrhA6eD/2WKSw9+7ErEAqmh0EOlI/54wuQAoZTO/jr7CHqnJ0adGmPXTg7AtPkg8FgzF+0w36Vsi+hbJ5ZWrlcrV9tI6L6VSSPeJWMyUaR9Bqqg34d+foMnGEEj0KSk8H29TRKJ+oCJB2MQfj8aqC0pKIZXrDe2V4EdY7h4+pbXgJOUNQbl8evr9dMkLeDFoe8HJqO8UoEDBXTS3LluSIJQMhfJK4UnaBPQFKU87HTjFQUQW8U8tuQnIx3VDwqZo0yDfL9zi5s1pECIuSjrbOxwWdTdCVGxT/XqTE7iwNailtraJ5Geq27+QADBukkyAitAao0vmk+KxcPkUjgNVLOUfURQiGHkRv+wmOeUloqzjX6d4jmBqk0FUNvDcv5oSIf6JkcqdqBRhLBqPm8Xh3bGnHN7VPWGr6cKR3/4EYFfwM5NmsVi8alwRMcIMOGv6+oVCKulF6PwBG2lYoUASsMSFvi5Q8CN1CbcDBb/e4gwII0buqzVLEypTH65k0yP1KffFJz12FPuZxx1N5DixQ3CZHUCn75bPhCezNAShSNTkR6IIhCv6oiIc0S57GBQvkaeVpg8iFXKEMURYrZ8uZ1Jj9APnX3J/CWh24dg49LvxQ0GKaO59jS4ZUt6Pg7XYXiFDVQOBLnJEiBCZIitYhu6jB6SwjDaJDiRPM6dSY5i0HhU1kWjsPiOM/R14oqdclIuVSgKO5gB1hk816aBRjkTTb3LGFp6Pm2JJ4IRC5PJpa4gmLBmqaifwKKpG9jFC5Td6lr5jQF2bIn/YxFJWxPJL35omGIWIW3HJ0mQ/N9ZjEoihePUkQuJ+NWoSHgcq/q1nAtw3iBB0iFBY399eXa3huRlRrKGqXgYQFvYx+zaejcJfZLl1Hm72tq/wq0ril8L1yXtAL0sGCrJ9RWEkXDn93Xak0KkRTLOnjXHtyWxZ5Qz0HVDQPlnHWJEZSyWK9o6OIS8S5q6li4xOMlTYfvOSsqVbS89iykbzeUdSb6PRFch7+MLBidG6/P3uQ3vQbIwSHHL2nmW8p0aYp+mREKlKTttds1Q+8buJJIDrcJWuw4jobGGhhIxOjnTxXcCJpebcZzQZ+VTR/1v4VtAUoAgHN5tXlQqxokYa4nL6yLXxx7JL++ej1qLCo7+rAVFUooMmljTBkaVQFIhBH0Kwh6rt8lt4vlAC0NsiYSbkIdIZ7iN02BR9mofMSChC43wQank3/hmxGBXylYAhoJBn1j9tLbUbny19KLgdPEjJfLmcQGY1DVc0bI0mSMqnpy24LjmCEBlSBY8ZAX+L/y3Dqa38DsEe6moo50gohfkW1YNwtxBIZBwkQSsVCiXFKlulXfaQjp7JkelrNuvb23s3D4ooopnJAwwkYTlEpf06EkO/FKoCcSDNMnbzZmUV/VYinxspaNCbQYRhhrj0Dcv4MISseRoeSiS6mql/QE7Su487LaJcaITFTfkbt1DQShynFew3QmKedkSQw45uGQAqZZNbhmXTNp8+fVKgRIEqg77FJ0MGFddzdGhJXbWXPgVnqbBLehXqHyby7UzYsIteL0KvbApYIZYqjJf0fay6CmT6fvFZWFTpUMlUuCRuHLRxaCAN+oL8JzwtVzlgGQbUyIV+JBlphm12N/feba0LIidogd4CgZ5QNSqPzwyOQxZj4SkwHfdRN+kzbXxXAhWrO1Qz+tiQaJK+Iyq8onHk9SAd4QTSCsR7doW7gUAG7YMibK62dzsCdMU4TVOCphGmx77VmxFRjBjbvAiZ2lQvuCiJ7Db6fpN5KEzMRvu3RGURuMQTZeDLFAFA5o+5L/OXN3T8kfKguNA4kQfduvrAbXbb++924HwsCWjKj7dLWxvDsWOIwvrNu6BmBNw7/zLPw7VI3ACm/atT4uCbtaeM3MLdrxGEPACKIHAQifCB/rhsL+AG8gqVS+v/xLHPeyw7gYPTcQIwV1elg36ZILT1oe0fYg84yZSP/MduoMdEtlaLhChWqOIKJMLyE64ar2Ii01dPoTAOp3WePv61P0BnMAi+aCJTxhE2wBMPES4+M49EyL9KYyrCQd9kE+NqhPMrIboflDgRVXSUtA6RlBWJp85qMBBNF2hq43Zz9arSxO8E+a4K8EIs/yb+B/IEq922wl9+udlohbvgM5CR7p05NUEBhPnGxajkAI8JpHA39R0AUozVdy9x10yAsFEGUj9dQqvRoU9SNgAUIBoKGk5aaFNiFJbP7HXlRZisb6QnvcHSF/wmfis0pGLHw5xvLAURFrFDwnM72+U8csTYwTvnGKj54HITyK71yyEI63fpybFgAzs4SeiTpzwRFofo9PWQSa1kheM2bm9/ASx7XpIM6YJgdKpN1OZhNjxMg77voBD36CylHqIVYXFIaXnAIQOksmkPE1SGpfkPWghhmeMgVGP9x9H5XwEKABQo5UEptY6XUhN+FHGkx4qwOMSn7JFrbO7tb61D8218GOGFyMj2zvIEYVzvn6dGO8HCR0bf+62JqVLnHTXh0Al7NEz7V0C6c5+vrjaX1rEBIsxJejyLZCE3RJUK8WR3JTvmHRewXa9jbUi9myoSHJ4Ii4egxyiUDP6ty6u01o8qOjVCbeymxwV4+HTNLzcSOyhWSCMsg2AQc17IZACww/asHyvp3bqKTo2o7krjqxOCZmnlCQtC5Xe1+Hm1vTX/3aWAVwoor9W6RHmtjx1x2hCbi0V2pZtElmhkmElN+rK27zFL9T1LpyhPyImZE0ArLw7/a3Bia7ftRGSq25dTlEO5SU5/6+vkoPsIc/YwUckLqd3VJlyCeb1aWd1NOaVJc5Ah0EoycKSntL7zZW+z2xRBmD/fnkUYy1K2n7DOJ4O+hT44kCb8nC+I0IB+9/H3ZYsbl0uflXgB+g2XT1tL11dFKy/eAjzfDCDEGfHpSC5kjprO+WvYeyr3LyZhRJNIUdx7i59P0KEyOAG6W+Byc7Xe9OWw1pWI4I8eIPowpRFUyh3WQ/zDcn8tcOjvCxBaaoIofYLyoz24BLTm0Et3hlW9kEcK6uqqSF6BPtVSVNKHONYT4gGbZ8svaXdgIZJKrZ9eQwFC5MeWwbdCAsDQ86Qht5snIHGQ9sl7+DWFSNPOG+R9hPn4TP6sN07vz0wo74R8YDgdeeXL3mBQ847YbYFWVVLSUV58s70OIhpJX50KxGQQSXBgivSosmJFVcNjbazZnyhzpoIGFJx34i+fbq4HV8U9ASghCeO2RkOKTLQyaO+/g2IMvg4UQDM2cPNPuvKoI1qZ7PvLrZM8vkBr9KkR5f7BRN0xnqCG5JSN/b1tp2rmqxjhEn58ODjAkfxVNgVNcyfWTBMJJCWDiGbIQ8IrAYjpX011wqkR5f7dTBCh9VFy+VZcu14sl70R+LpIY0zWckD+1OfVDwZNAOS3fDFMniPTkkbrFBJ1D7raYVS6qKMZOnYv98kU74oSgOJj/fR0QxAtKeBJWlCqpqzmYnewufflZmcdyh1UF0yr9PZ9ZiN1v0hICupiInimK1OQUWJm7Ome+uHUoS7AdfaoUV7/QNOVNGftJY4nuYz8FnanDDukXfptzVcvkZR4BUpSkZN26E7tn1MqRDlzkh8Ta6vuTg1QEfZc1lUD4IEgURw6G8vlaA3JEMXOZfiY01pSjBBgyUteFEnQmTftwernoiWBpxaCsnRqOru4fAhr51OfJaQAb56weYkgKjd4DRZXV//e3+poIpQ7KFZMcxl7vsFSPuF3tIry50Lnpv336upvhEMMmeu3M4RRhQMna+RFOHic2k0BUt3XBZNX0NYI3OdBCg6H4ezjKfzGUSF/LoMnweBqu1Epl8tYzOOsechcv55p37X2jx2a9SAczKDxBTsoautxVMJLzZSaP2nxhIHTcm6gGAWcBaBVlW7CKSvti6/V/DBjnNjIWkkaRx8m8yejk/kBoukUpnIKbbEtapqgPQUkTRj1GZGgg92Fagr5SVxn58OXTVyzQLM7LsLDTOe6Q8WZLRE5fUqkhH1qBMOezmJ7E13NXKGqUl7oEJMFlzKRzKev+I/XsEI0d5auV1H9cJKGd7hAhSNOWYFfeGIk64P2T9LP7WAx1SSIWq/GuE+NMGc6YIBalHka4KGBDjPFU81XxmFiFGaBhhh+I1d+KLiAxlPhmG/WV7ffIXlFU+KxlCik6GrYmj1fA3L9pGOXVldmikFbdQf0rZDSZSbfAhEB18bmtzhBxGGW/fZP1OfgdMQBrAJR+Z8HR0s7l58AVBfEdODsjU6KRlRucUwF9KhOCpn7mIWwejxbkN1T5oN6hCchysVTM+X69toKsxRR6EUIZGsq6O3QqsqjlKAVAHAwCHiu40xiieSOUbnCDCQrqczyUb1qjWF3fN1XGMKyB6FAcvF7GtQLfihFFPco7Hra9GaFqHnFy8cikjBI3qBuWSXwt1PHMfhC+vFuWFFxdT5CqA7GxkvDyDdLrST930IEXPoR4uI+Ws7NlMvFBkpbdwSNJKMwws/+ztOF3UYTHESIj6XvTLUnSxak47t2VWfjsZjlH55kUiF1z+MRklIte1cnIFUUcFzo5g/3eP0CdlVOhUfaQijYu43Jgiu6ZyD6U+nGemPo9dG3E1Kc6kcHuEzu9mvVff0BQliu9A8fsmllBmUhF4gosBDSShio862NWZhQpOXzFU5OcRh49ZNvtpDpWGzhAcX72rgCHHOvSW6ZONfj5amiPT4cNUjaMOjjm/Vhbzk9fWyZ7uq0QztEVtbh1KPZ+mZtsPnl3Q7QaA0DSTaa/upLUlVprkPDNJUSNm7b21eVTcGqXqAbnajyYPKX4+Zpa+2obrsCwVMjktCN1r++381ktanGUvTteSQIUSk+1QuXyFEyFDs5Q9yF/EefSCNOR35z0xXFqRd4OuutjU7aL/KXWLA81SFop7kOuR51aoReHZz2WlJp4rKkLq2955GEx6oR3gqULfnUD51p/upLzSpBcVGV53mlRv+Hv8Vz26hCuTEYVyMsZwfTnn1ZO7s9mHR9BdVve9bKEP7GL+iTXWbjXzO0WNyfbFTCtknBkZLIXLfUPG+UOFS0M1apgUxTtSbnhNM9E2x1bcIootsKGJd3ThAmYd+omeJXcQJxF/zBeep0eAlyEbb14ufVa7s2jwdTZCPBQTM+FUK043mS6qEKsG5vTLLHcMTmD+ou+IHzHU+OIl/rbu7tQyzK0xOUUaMrucNJWiknpkKonk3c0g0uiVT+RMdaIHuB4DoEUujmDxrBb/rse7mFEJpoD9TPXSCIOJCD3hp4Vl5LOEwG9uOHzdLa8URJw5ONEcwSAaI92UNKK9mLvroOaiMEzkUQ2u0P7546Eidoxhwy/tJAHXemAqVy6NY1H3FEKZSfRAUoXKTiLEviAwc2fxDrhQ0kRzQOFVPOK2UHMt0x52JYa2GqXbJ04wiUHTudnVvKcAdbylgM5v2CnSA0X/qWBZCpstEJZ18OptrMzYuWiNCrlq4mDo5784eLuEFjc++vHfml6zMK6GKIkadGIFVZz0z3lgtPzv5+QhWyjGhs1B85jECTuzSrhf8cktBV2KPvt0gUD6Z1FWn1sk3mJzJq0ExBexDab3UUjOy9gyZwpsLp1LvxeW7HrcsaHetO56e/bzZevDJvDMnZ2kiEMfX94ww+VEm5JkZ/0qzvOJXzABVkv0TXpyWj10yOQBhvLs+UzQdC5K+9zc29Dy2htEhnLAoraiIUYdxcm7X8BxjoiAhjYc4HQ26JUSilvpdDEao//oCjIENIlhUIS4IkgONOb2VlaWlYDEEYY6fThAtH55lvD+tbpyfXX782mqZODg8Mm6Xx5sgdegtN2r1eLJfLLLrM20YTemqE/r9MLpfNpkS8G7aEKqDmUwP1wsT3zGQgduEcguG2S1VGLZvNWvfs/fv394fft56entbX53hF7EtRemgPXdjt8SG+BcQfT5Z13dR1/U+QPcaFHSeY8XbA6Ewb4N+QpPfPRBhjmP4iXRE0ksC5+WyEudnLj9+C7EGcGWF/pozW25Fy0XzeOtR//RlDiK4pew7CGNtYoBuQxpOcyY/UFonRV0PEVxbqOrmxlBoywUs6XKdGYC3onPVFqf7HDCEUpxdFdKfobLd0Ju/+nCGMRMQldeZz9ZuZP8AotQmK09nuzmP+nBs8KAk/47PewjLxTNs3JcXv9sjnRXY2hKcLbbC17pZzOQ66eZp9hZ52NOXpnhSh7i/j44NXR78hZbuMrtfqZ+9/nv7aOM9kM6VC4bEWnwVh21mFMlA0STI6FwvkKxbuVHqUZ1I3q5VG/3Bl7eK7OuEeUrc+NPHN4kDhOCmTO/91NOjWkot0n6y8HI86Hm2URVdu6rVQfWhBdb6Pim3Uo3Qhnc52Vu7v+7VyPp9k43G9t0CiB8e1nVmH60eZWW4HrC5/u+uv1puuk0IStcWJikJKnblmog3HQjihFgP+sGiqjOr8EO/RGCyUcC0d5scgnMa3QFPYg5A9WqiQDd8z/yXCKPbxXQjLk5P7r0rZ2pwRJooLZqYKR+p8EbKNhVqG0Gxbc/b6zgWh+mOW01FfgeTjZmIqhMFKBefIQTdC/W7RYjZS1zJSXAhDKvfYKan51nc6P4q+/YfSyVQdHxfFYKKu8Q2ENPwXR78wtZYGh720e2uk8mBvrHE2/jizbooohuvSPYjw2lvBwHPpg1eFiIohq4O1dMpOp8s5e4Pac+8/9CDsuZYhKGUPhvrtq1oA9HT68tlNLkN35Tp7+OaBULWv7JQV6fH7wAxWAb8wQuvai3yzv9bCZffcj3kirNFJCmfn2nVNVaPJV0bobEmJq0yz/ysnKsaGOUeE71EGQ26leyf1fDwRRWv6dRHSPfqoV9DAYvPV/t1jpj5HhEelCBDTa4Oqylq83gwhpriq14b92RDGxiA018X0Q7+KmmJvgxB88/Uq5vLxnz2Gtg3ENpfvK8gbdjbbvB1Cp1dWi7tXFkK7aUqrrVmDs9NrH6kr8z8fykUtf6FmTg3aklNZba61ZiO0mhxe0QTZCDYOoTzPe+mUu2HGG/jK0Rp1r9ca9fXKanmOB+zn5UcoLQ/nWH0jLTGNY8HFT86Z8VdGGPcgVDJH+fIck1VSn1XzZxfOfjw5p78lQlk67jKMOpxfLkf6Go8l2OZp1npp0Ap9bYSuWVqQTpB1wXbndpMpX6ihzsaT9RV6zKmcrr0+Qvp6ZWGNnJARLT73vvnAFgVwbJLOqskBvbgh23j1WUrvETQyS9Q8jJUP/D01Ju2BI9T6x1f2Dnqs3avqYRb9lTtjn4dwyihGQPPEyz28s1X6Ze+KjSVPfB2V7u+mUZrGd73n3cVS+q66etW8yyoR8T37PH1o1yyElDEE6zRcTSpKY2itYdmu3Ugy1954nHCaDClYOQ8EfLgzOFAeiEKbcfUqXu73hNR7ZopeBQpKEkG7NBbuAVvjZDUlIUKQvXPV/cOX2/UgFL7rTHnDr0Gy7x98TVDVQf1fxbEAAAI3SURBVM73bojZgbdXavFEGE7Tq+AMntrHD0EoHZ+5eUGETXccRTrV4Vzp+zZRabtM7dEfUsKsh66Qc6bp61WCqfeTr4yw/O171cMLLRBXrCN1WI5DVqZXvsqo70vecjmBHlbUd9LOdgjG1Sv11cew7uOFEH63RY10qCbwhPcWcGbRsDP/85hDPYv5mVVobjxY3vusvZonwgAvhNDe3yycov2qiFXzwjUnSyt4O1jDXSRATkPBZB1yVDq1AoULh7BGRSfdrYpZnbr8yCwd+KFrddprjmHZxgWWQlap4QIirJ7jwZFOiauDWVUchSH0VaKodMdILx2WHVbx+gFayaJ9E8dcEYZoi9gsvBBCdFQ7EjIsLoMkrMq71uI0LvKWY16z56mDBqlwto4OkrGVxb/vVdTJW4RsVQi7wXNC0xJEI/1gWFeT+tW6vfGxwli/Y4Z0ZMFyMulmxVQ3tIhUZfzMn92rZ1ttIfYR+vBeRJaMh1U0/o3ID3y0IGWV0O/I8tRu/azMNSHHWimTf9+r51veVosLYTQKHSgoZBgvK3WIvarCGutiFa+S3bjpeoCVebfMBGbis3s1Z4QJMweFjJ8VviBCfmy4WcXULlqKpbt8kJU5VBcWYTT+XY8HWKmH0PlPn/pZoQ25SM6MYLWgCKNqIsgqXsnJSk/3s9J7Bs6Q/WEIQ1mVHxTr6FY3q3qmcDgrqwVFyA6ElTBWP7HR/V9AmDD/qYWx0g/N/wjCGFsJZ2XOzGrmXv0f/t+gI4Q33kQAAAAASUVORK5CYII="/>
                </HStack>
                









            </Flex>


        </>

    )
}