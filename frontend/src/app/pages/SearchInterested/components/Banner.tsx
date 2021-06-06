import React /* useEffect, useState */ from 'react';
import { Grid, TextField, InputAdornment } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from 'store/reducers';
import Cookies from 'js-cookie';
import styled from 'styled-components/macro';
import { debounce } from 'lodash';

const Detail = props => {
  return (
    <>
      <Wrapper>
        <Img
          color={
            'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUSFRgSFBUZGRgYGBwYGhgYGBgYGBkYGhgZGRgYGBgcIS4lHB4rIRgYJjomKy8xNTU1GiQ7QD4zPy40NTEBDAwMEA8QHhISHzQrJCs0NDQ0MTY0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDE0NP/AABEIAMIBBAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EAEMQAAIBAgQEAwYCBwYEBwAAAAECAAMRBBIhMQVBUWEicYEGEzKRobFCUhRicoLBwtEjM5KisuFTc/DxBxUWJDRDY//EABoBAAIDAQEAAAAAAAAAAAAAAAIDAAEEBQb/xAAqEQACAgICAQMCBwEBAAAAAAAAAQIRAyESMQQTQVEiMgVCYXGBkdEzFP/aAAwDAQACEQMRAD8A6fDIQi5jc2EKuFVtSJJT+EeQ+0dPI8ndo9BbM98IVPhJiii9iDNARYXqP3C5sxK1Fk2Lai57SFQT1M6FlB0MalNRsAISzfoXzOfal1EjdOk6N6KtuICio5CWsxayI5wU4FJuvgFOshfhY5MYxZohepEyUp3khod46pRKm0ZmtCu+g+RG9GNSnaTh4kvkyWRlBGe6k0ULJZCIUZNTUCPyxAILdkLWHRSRpcn6S9QoBZmIxBuJZweKGYhja/yipRdWhc7NLLC0UMDqCJFiK4QZjte2kRTYnZJaJaYuO4qbWTS1jfn/ANpQXilQG+Y+usdHBJoNRZ0eIqlBe15WpY8E6i0o4XiZYZX1HXn2l/D0EJDfeW4KKpoviktluk+YXsfWNxCMRZTbvJxFtEXsXZmLRq31aX6SmwvvJbQtLcrLcrG2haOiEQSrGwi5YsEqytTPhHkPtHXjafwjyH2joxhC3iho20W0hB2aF4loWlFDrwvEtFAkILeMquQNBeOhIi0Y1eoWOsgKXm4+HUm5EEw6jlHLIkhnNUY60u0sUcKHvfSafux0ihQJTysjn8GXUwRXbWOo4QntNOJaD6kiubKv6COsd+hrLDMALkgAcybD5zKxPtHhqdwaoYjkgL/6dJcVkl9tgPI12y8mFUSviuH5j4dJk1PbSgPhSo3eyr92jR7bUv8AhVP8n9Y5YM3aTB9dX2TMjpddYVcQzKFOw2/3jP8A1bhn8LZ1B/MhP1W8c2Mp1jem6sLbAi48xvDUZr7o0NhkhIpVVkRWXXpSP3MYpIcQU5aSo3UwWjLCU5UmgWjSwONvZTLZxag5SwvMVqZXUR9PCs3I6zLLHFuxbgmbwMUypg8JlsWNyNB0AlyJkknoU+xIRYQShsIsJRCrTXwjyH2j8sdSTwjyH2jssY2FYy0LR+WGWVZLGQtH5YZZCWMiiOywCyEsbCOyxckhLGQjskXJJoljIR+SR4motNWqOwVVGZmOwAkW9IloCbanQDUk7Ad5x/HfbhKd0wwDtsXPwA/q/m+g7znfaf2pfFE06d0og2A2Z+79v1fn25udfxvAVcsn9f6Y8nke0S9juLV65vVqM3YmyjyUaCVlrsOcihOlGEYqkqMrk27bLdPF9RLSuDtMqSU6hXaRxIpGlAaG40PUaH5iR0qobaSQWvkYma2A449Oy1LunpnHr+L1nU4SolRQ6EMp5j7Ecj2nASzgcc9Al6fMEFT8LaWF+45GZcvjqW49mrF5Uo6ltHfBZPh7X1mVwrGCrTVgpAy2uSDqPCQbHQgiXM05s4tOmb01JWjbp0haTBAJk4fGFdDqJboYvMddpmkmhMoyLlotoiVFPMSW0UKbojtDLExVdaSPUb4UUsbb2AvYd5l1sY1RBUuBSt4zSYl1Jt4W0BUa6lddeQBMdjwyydLQLmkWavEKakqSSRocqMwB6XXS8JTNYJZSyUrDRDluByvqNfLSE0/+SPyB6hrUl8I8h9o7LCkRlXyH2klpiY2yPLDLJISiWR5YZYPVVd2AjwQdQZeyWxmWGWSWiaSiWMyxcsfaLaVZVkeWLlj7SGtWVPiNpFvoibY8JPJ/bX2j/Sqnuqbf2CNpbao40Lnqo/D8+enYe2HHhSwzqlw9T+zU7WzA52HQhQ3qRPJwJ1/w7x+8kl+3+mfyJtfSEISSlSZzZFLH9UXnXMhHCatHgFZtwq/tHX5C8u0/ZnYs9+oUW07E3lWglFnOwnUJwOkT4FdyN76p/iuB8jLKcKC74VD+yyk/Jv6yWTicjTfKbzRVwRebyJSBytQKHoUH0te/pOm4JRw9ZMpp02y7HIpuvLly/pAlIZGJ57Cej8R9msPUpuEpIjlTkZRazgXXbcXsJ5ujXAPUXgRlZco0bfsxi8lQ0j8Li47Oo/io/wAgnVATz2lW92y1PyMH88pDEeoBHrPT/wBG0uASCLg9R1nP8yKi1L5Nvi5LjxZTAk1MHlJvcHoflGqhvMLlZqsmom+hsJa/TlUBb5ntoi/Ee/QDudJQrnMLIQAPjqH4UtuF5M30H0kSAKtxdEY6uQTVqHootcdtL22AGsOGDnt9GXLkj0ierVZ2sQHcH4f/AK6fdjza3r0yjWZtCqlHEJUBulXMlVmByOMrWWmg3AJGo/WAzFjL1Ogzn3aoLD8F/At9b12G5N75Be/O+42MPw5U1Y53O7H7KNlXsPW51mh5oYFS/ozNcuzN4ZwqoKSBnKNlGYWVmLZRdnZrlnPP5a2uSb2SExvzcl9hcUYGCoscpJsBaaVZ7jwsAfQznkxRIF2voPtJUZjsCYx423bNzx3tlp8bUF1v9JInEMq2sSeplIh+aSN731l8IsvhFiO5Jud5NSxLqLAxiJmNgJZXh7/lkbitMtuK0yBqzNuT85Ng75hFbAOOUlTCsOUFyjVIq41o1HqZRfftKLYuqdlt6GSUqL8pew9Nt2me1HvZnfGP6lfBhmGZjvytJa2FVyCRtLYpwyRblbtaFOe7R5d/4pMFqYemBYBHf1ZlUf6D85yOB4bUq6ovh/MdF9OvpPVvbLgNOqBi2uzUVACG2TLnu7MOdgxPpOVq3qMKS6AmxO3K7eigjzLKOs9D4WVSwpLtdmaabbbMfDcJpg5QDWcHX8inuBuexPym1h6Rprb3bgXuTZTqdzZD/DlNShRWmoRBYD/q56mSTXQvl8Gergi4IIOxGojRT942Q/CAC/e98qX6aEn06x+Jo+7JqL8JN3HIE6Zx0/W+fI3lwC+Fj1d7/un3Y+iCRR2E5aLKiwsNB0Gg+UWEIQsZWpK4ysLj5EHqDyPeU8CjJWAzZX0AcDR0bRS67MLgAjtpa4l+VeIDKoqDemQxP6lxn/y+LzQQZK0FCVM64X9Z5VxnDe6xFanyWoxH7L2df8rgek9XM889uaWXEh+T00bzZSyEedgkRDujTPo5+157F7PVc+EwzndqFMnzyKD9RPPKPsliCgdiiEi4V2N/JiBYH5zs+B49aOFo0TY1UQI6AgBWXQl22VdiDzBFrzJ+IRcsaUduwYaZuVnVFLMQB36nYAcz2ExsbiQ9gylVN8tNfje35rfCvb5nlKdfiaM5/tUZxpmJGSncbIoN2a3r1I2kP6dTGbI5t+OplZqjkfhprl0HfboOczYPG47l2MtlpjrZgrMtiEBtTpDkztzNv9hzk+EwbVDnzEA6GoRZmHNaKn4E/W3PfQyPA/o+nvKiKo1Wlm0v+aox+N+fQdzrN2likfRXRj+qwY/ISs/kOP0xX8kQtCiqKFVbAcvuSdyTzJ1MlvC0LTmNtu2WLeEMsINk0cFS2HkPtNbhgcN4Rfr0meKZAHkPtLWDxZQ33+07E02tHQluOjrBTBGolVuGIbmx17ytT4yttjf6SKrxltlUD6mY1DJejGoZE9GhQ4eqm+/nLoWczRxr3Njv1nQ4OiwF2YsTr0A8hAyRkttg5YyjuTJcsMg6SULALEieQwLFtJMsMsErkMtC0dlhaQlkNairqyMLq6lGHVWBB+hM82wVAo7q3xJ4D+2HfOR5kA+gnp9pxPHsN7vGO2y16auP2kJSp9DSP7xnV/C51kcflAS6KkIQndEgQCLEXB0IOxB3BlLhalUKNqUd1J6jOWUnuVZT6x+Kx6U2VGvcqXJA0VFZVLt2uw+sZTfLXena2ZUcd2AKOPkifJukhC7Cc9X41kxa0CzXapkKFfDkZVNN1be+YkH17TopCCRHQMCrbEEHyIsYsgx1SyEXsX8C23u2lwOdhdvJTIRG3w4VXpUmapZmpoxsi7lFJ3PeUeI8MLYjDVaj51pmoxBRRsgdToOTKDr0m3RdWUFPht4fIaASlxutlp5Ru5t6DU/w+cyp/UbfynP8S4hmcFr6myjovX00v5yfgyqa1mVWzodSAbMhGW1+od/8InPcRqMKl9MoRB3u7sD5bJNEVGVqZU2NyLjp7tz/AAEKcbi0KUtnaqgXYAeQAjxUH5vrOKxFcgX1LE2Avud9+QABJPQGNoPdQcwPcaA+XaYvRfyN5o7i8hq4ZH+JFbzUH7zncLxJ6dtcy8wenY8p04N9eusTODiFGSZFTL0dUJdedNjc2/8AzcnQ/qnQ8ss16FVaih1N1YXB27bHY3uLciJnR3DDkqtT/DUU1AOSuhRXt+0HQ26qx5zLlxKUW12ip62adoST3cJhAtGAKSBR4eQ3B6TMrAXNltNOtQrFQWIGgH07SiC4uAvncTqRZvxvXZBTK38V7dpap1KfK/raZ7KYoENpMa1Z0vDaVNh1N7+l9BNoEThaOOamfCfpNbC8d08Q17TPPFJ7Mebx5t2jpQY4TFpccQ6WMv08aGFxr2G8S8cl2jLLFNdovRLTMqcScbUj9P4QTiwuFKsGPI6feV6b+AfSl8GlEIkVLEh2IGwGp79JFiMCG1BKsdbgkayuO6YKVOnotWnnntnjCuKViTko5UI5WqgFm+bUteiec7jB0HUku5Ychp85xHtzRK4gHlUFNh3KPZx6BU/xTZ4CSzfwyNbqxkSZ9Co1PwgZk5AaMo6C+hHTmO8m/Tk5h/8AAx+076YtxZn+0PA2xWQpUKFQVbfxI1sy6eXkbyauueo7A2K5EVt7Mmck9/7wqf3hHYvFMwsAUUsoZibNYm1gBtfQXvzkaqlPYKtyBppck6eZklIKMSULRd1eoiiquisf5WO41Oh1F5ozPIvvIzQT8o+UrmW4F2ti0TS+Zvyrq39B5mwlQ3Zs772IAGyg8h1O1z26RUQDYAeQtFlOVlqKRpcGxnu3yMfC30bkYvG8RmfKNkFvU6n+HymZFZiTc7mBxV2M5aozcdh2dxYGzZLnkMjlmv5i0tMLugHJXb18Kj6FvlJmcAZiRbrylR7sbagvp0KUl3J6MSTb9r9UypPQNChPetnJ8ABVRye5BLHqt1AA56nYiWwIKABYCwGgHQchCZ2wizgMN7xwvLdvIbzqhKPCcL7tLn4msT2HIS/MmWXJ6HRjSCFD+/o25lwfL3bn7gQj+FrnxBYfDSQqTyz1Cpt5qqXPaqIp6i/2ZWT7TdtEiwnMoz2ZNfiaoFAF9BrftI14hTbS1r7zFbh9RVBbaw215SDIQZ0VjXszoxwwrTNmvgUa5UzLrUAvOCVGHOMdr6nWEk0NhGUfcgKiIRHwtDDsjuZItdxsxHrHJSYmwElbBOBcjSXaKbXuPw/E6qcyfPWaVPiaVRaooFtrTGWXMKTf4Q3nAlFdi544PdAMc1NyyA25A8x3lpPaJ+aiQ42unw+7sbcjMzJeVxjJbRFjhPconWYXjSMPEcp+cyfbDJWoJVBuaVVSCOQcGmQexLL6gTKUAQxdB6lJ0QZmsGVb2zMjB1HqVEvFjUJqS+RGTxY03EyIREcMAym4IBB6gi4+kWdkyCOoIIOoOhBkFPBorZwNRtck28r7SwTbU7DUnoIKbi42MhQQhIlrZjZRcDduV+g6mQslhCEhAhCVuIPZMo3fwi29reI/K/qRIQMOiKgcgDQuSeWYlifrH4dDq7CzPY25qo+FfTUnuxlDCUfeOCSSqHmzEFxsAL2sNz3t3mrES7IgmlwfB52zt8K/VuQlGhSLsEXc/wDV51WGohFCLsPqeZmfJKkMjGyWLCEyjSKvUyrcDMxIVVG7Oxsqjpc8+QueU3uG4P3KBb3bVnb8ztqzdhfYcgAOUzuC4f3jmuw8KErT6E6q9QfVQembk03pnzS/Kv5MuSdukNtEj7QmWgLKiUwVAI/CPtIv/L6f5RLNEeFfIfaPtH7Qak10zBxnB7m6WHnKTcJccrzq4FBGRnJDo+TKOjiqvD6i7rpK1iJ3NTDq2hF5Tq8HpkaLaMWT5HR8tfmOXw1XKwJvpNlOJo3hKk+YEung1K1stj1ljC8PVBYC/cynJMDJnhLYynhFYXygegipw5QToNeUvBI60TykZnll7Mz34cpFgFHpM7FcMCi+noDOhtEtIpyQUM84+557xSouHAdwRmbKotYs1r2Hpck8hMkcYbNZGS/SzD5XIPraa3tuxOLAOyUFyjoXdy59cif4BOeemrCzAHznY8fDFwUn7jJeVKXWh2Gq+NkK5bksmtxY6soPY3IB5EdDLMzaildGJKX+L8SEbEnmO/LncS1SxH4X0PI7K3TyPb5TXXwI5WTVkzqy/mUj5i14zO/5VJ65rD5WvJYSBEDUC3xtcflXRfXmftJwLbQhIQIQiO4UXJt/XoBzPaQoVmABJNgNSTsBM6lTNc+8a4QiyLsSv5m5jNvbpaWMTSZsquLBzcJzCLbMzdySq25Bid9rIEXOVaInY1KYUBQLAbAR0Jo8JwfvGzMPCv1PIREpUrYaVmjwfB+7XO3xN9F6TShCYpScnbHJUEZ7s1GWipILAl2G6UxozA8mJ8K9yTrlMZisQtNC7bCwtpcsTZVF+ZJA9Zu8IwHuUJexqPZnI1FwLBF/VUaDrcndjKelYvLPiqLlGkqKqKAqqAqqNAABYADoAJJFtCZGn7mUbCOiQKIV6Pwr5D7R8ZS+FfIfaPhhiwiQlogsWAiwyhLRwESLIULaFosJdIobaU6/EaSNkZvFoSoBZgDsSFBt6yrxXjQo5lUAlfiZjZVYi6qbAktaxsORHUTgcVxJ/hIYLuzrqXY/G721uTc7aXmjD4rnt6QUY32Se03EFxVf3tEXVUFMljlLFHcgheQ8Z+Kx20EykcHzG4OhHmJMyK/jU2P5l59j1HYyNwHQliFZLjNyBH8p0NjyPWdaEVGKigqCV1QD+zIujA5QdrW1Q+W47X6SSjUDqGHMA+VxexhXQstl+Iar+0NvTkexMIoZh863pqxZlOz6jITdWzbjS687lDpLBxRBsUO4F0swuSABve+sgR8xRlJAdbH82gzqOxtn+cv4amC4AGlMZv3muq/IB/mILf1UXdIgqYpUID5lJ1AKNra17adx84041OWY+Sn+MvcQRCoLNYg+HTMSSLFQv4v9pRpryZgnfJ/NmIB84bSKUrGtinNgqWJ2vqx8lH3JsJdwOCKn3jnM5FuyA/hX6XMsUMMqbDU7sdWPmZNfmdpaiBKTZn1GzO55KFQeds7Ef4gP3ISLDElAxFi3jI6FyXI+bW9JLMk3cmNiqQ5ELEKNybCdZhqIpoEGw+p5mYvAaN3L/lFh5n/a/wA50EyZpew+C9whCc97UcTyL7hD43F3I3RDcWB/M2o7C56RcIucqQTdbK3FMV+kswU/2a5kQj8TEFWqfcL2ufxaekcKxfvqNOr+dFc9iygkfO88lwDeC3Q/9p3XsVxEFThm+JMzp+sjNdh5qzW8mXvNGfHUaXsZ8u1Z1kSEJz2ZwhEhBpFlSkfCvkPtJJBRbwr5D7STNE8kNokgIzNDNCUkSiWLIveQ95LWSJXFkojhIPeR61ISyRKcWTTI49xT9HUBbZ2BYEgkBVKgm2lzd1AFxuTyM1A84f23qE10XkKQPqXcfyzR46jOaQKW9nPYirUe13JtfdVN2JJZmta7EkknvIVdlID212YaC/Qg7Hp1j2L7qhZdfENNQbFVv8R7CNJWoh1up5jQi32IPyInZSrSGkVW6uMn47g32VgC2a3O4BHmB3jkwiglj4iTck7XsBcLsNAI7D4d6iozEADxBlPiY2KqwFrAG97dDaIhYsfEpUG1wD4iN7a7cr+cspMbiVsyMNySh8srMPkV+piQxTjMi31uzW6hVKn6uPkYSFMgpixH/Me3qHP8xmjh64RL2u7szBRuQDkUk/hXKoN+8zsJd2DW0DM1+pN1UDyUm/cjoZdp0wu3z3Omwv0ECU+LL42CqSc7m7HnyA/Ko5D7x9oQiXJt2ElQlNmp/Bqv5L/6SdvLbykuKxCvSfKdxkI2ZTUIQXHmwkcR6akgkXI2PlqPrGRytaYLimKYMDY2NjbQ9/KEIoM2PZmqGVxswIuOhsQf4ehE3JyvDWNOp778BGSp0AOqOfI7noT0nVWmXMqkOg9FLimPXD0zUbU/Cq3sXc7KDy6k8gCeU4OpUZmZ2N3Y5mO12PQcgAAAOQAEvcb4j+kVLqbol1TofzP6207AdTM+bMGLjG32xc5WyXDVMrdjoZsYfENSZKqfEjZgOTaWZT2ZSV9b8phTSwT5k8tIycbBXweuYTErVRaiG6uoZT2IuLjke0mnOew9fNQan/w6jD0e1QfV2H7s6OcfJHjJoztU6CESEWQy6TeFfIfaPzSOkPCPIfaOtMLNVIdmhmiWhaQsXNDNACLaWUF44GJaNq1VQXbyAGrMeijmZai26RTJGqAAkmwGpJ0AHUnlOb4xhUr1Fr1CVpqmTLqGqWYsCOar4j3PYb2OIY4Lq4ud1pg3A6Fz+JvoOV95g4nEtUbMx9OQ8p2fD8SUHzffwLbRNjsZ7zKqqFRNFUAAAeQ28pm1MMjHOyKTzJA+vX1kjuFGZjYDnKVRzU+IWXkp3Pd/6fPt0yuwxNdnGVDZSQC+xIvrk6C1xf5dYmijkAB5AAD6CI9QLvvyA1J8hIHzOyhhZbE5eZIK2zdtdvKC2kEkKlIOCzj4rWB0IUfD3B1J/ekdbCLdVYuQzWsWNtFZtban4ecuSKp8aD9o/JbfzRXJ2XRIigCwFgNgIsIQCwhCEhAhCEhAhCEhDU4C4zsh2ZduRsdj6Ey/xSnkwtZcx8NGoASfEAEbKL9hYX30mNw6plqIe9vnp/GbfHz/AO2r/wDKcfNSP4xE19aGx6OCtCKYToiRJYwlbIddjIISmrIjs/ZLGGniVS/hrKyEcs6Kzo3bQOO+YdBPQJ5DgsQUCVRvTZX7kI4Yj1AI9Z68NdQdOR7TmeVGmmLyKnYQi2hMmwDMp/CvkPtHQhMDNKFEIQkRBYQhLIIZnv8A31Tsgt2326RITb4P/UpnL4j4j5yOEJ30KZk8XY5k15/wMeu0ISvcKPRX4fqGJ3uBfnbpeSv/AHifsP8A6qcWEVIMlkTfGn7L/wAkIQUQlhCEosIQhIUAhCEhAhCEhCSh8a/tD7idBx//AONW/wCW32iQip/fEZHpnCRYQm8UEIQkIaWA+D1M9X4Hrh6J5+5p/wChYQmDyQMvsXoQhMgk/9k='
          }
        />
        <Title>Phòng khám Đa khoa Quốc tế Exson</Title>
        <Address>Số 722 Sư Vạn Hạnh, phường 12, Quận 10, Tp. Hồ Chí Minh</Address>
        <WrapperStatus>
          <Status color={'#315df7'}>
            <P>34/90 Còn trống</P>
          </Status>
          <Status color={'#727A8E'}>
            <P>25 Đã đặt cọc</P>
          </Status>
          <Status color={'#727A8E'}>
            <P>28 Đã bán</P>
          </Status>
          <Status color={'#FF9832'}>
            <P>31 Đã đặt chỗ</P>
          </Status>
        </WrapperStatus>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const P = styled.p`
  margin: 0px auto;
  width: 67px;
  height: 42px;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  /* or 150% */

  display: flex;
  align-items: center;
  text-align: center;

  /* Background White */

  color: #fdfdfd;
`;

const WrapperStatus = styled.div`
  display: flex;
  position: absolute;
  top: 132px;
  justify-content: center;
  width: 100%;
`;

const Status = styled.div`
  margin-left: 10px;
  width: 110px;
  height: 48px;
  background: ${props => props.color};
`;

const Img = styled.img`
  background-image: linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0) 100%),
    url(${props => props.color});
  width: 100%;
  height: 220px;
  background-size: cover;
  color: white;
  padding: 20px;
  border-radius: 5px 5px 0px 0px;
  padding: 0px;
`;

const Title = styled.p`
  position: absolute;
  top: 40px;
  justify-content: center;
  width: 100%;
  font-family: SF Pro Display;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;
  text-align: center;

  /* #FFFFFF */

  color: #fdfdfd;
`;

const Address = styled.p`
  position: absolute;
  top: 84px;
  justify-content: center;
  width: 100%;
  font-family: Segoe UI;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;
  text-align: center;

  /* #FFFFFF */

  color: #fdfdfd;
`;
export default Detail;
