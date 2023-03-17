location.pathname === "/kali-nethunter/" &&
    (history.replaceState(null, "", window.location.origin + "/get-kali/"),
    (location.hash = "kali-mobile")),
    setInterval(
        (function e() {
            const t = $("#kali-platforms h1 span"),
                n = (e) =>
                    [...e].forEach((e, n) =>
                        setTimeout(() => (t.innerText += e), n * 100)
                    ),
                s = () => {
                    let e = t.innerText;
                    for (let n = 1; n <= e.length; n++)
                        setTimeout(
                            () => (t.innerText = e.slice(0, -n)),
                            n * 100
                        );
                };
            return (
                setTimeout(s, 3e3),
                setTimeout(n.bind(null, "ipms"), 4e3),
                setTimeout(s, 8e3),
                setTimeout(n.bind(null, "Plateforme"), 9e3),
                e
            );
        })(),
        1e4
    );
{
    const e = document.body,
        o = (t = 0, n = 1e3) =>
            new Promise((s) => {
                const o = e.scrollTop,
                    a = t - o,
                    r = new Date(),
                    c = (e) =>
                        e < 0.5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
                    i = (e) => e.preventDefault();
                window.addEventListener("wheel", i, { passive: !1 }),
                    requestAnimationFrame(function l() {
                        const d = new Date() - r;
                        (e.scrollTop = o + a * c(d / n)),
                            d < n
                                ? requestAnimationFrame(l)
                                : ((e.scrollTop = t),
                                  window.removeEventListener("wheel", i, {
                                      passive: !1,
                                  }),
                                  s());
                    });
            }),
        t = (() => {
            const o = 120,
                t = [...$$("#downloads section, #kali-platforms")];
            let s = e.scrollTop;
            return function () {
                const r = $(location.hash || "#kali-platforms"),
                    c = t.indexOf(r),
                    { bottom: l, top: d } = r.getBoundingClientRect(),
                    u = l - window.innerHeight,
                    h = d - o;
                let a;
                e.scrollTop > s && u < 0
                    ? (a = t[c + 1])
                    : 0 < h && (a = t[c - 1]),
                    a && n(a),
                    (s = e.scrollTop);
            };
        })(),
        s = (e) => {
            const t = $(`#downloads-nav a[href="#${e}"]`);
            Object.assign($("#downloads-nav .marker").style, {
                left: (t ? t.offsetLeft : 0) + "px",
                width: (t ? t.offsetWidth : 0) + "px",
            });
        },
        n = (n) => (
            e.removeEventListener("scroll", t),
            s(n.id),
            o(n.offsetTop).then(() => {
                (location.hash = n.id), e.addEventListener("scroll", t);
            })
        ),
        i = (t) => {
            const o = [...$$("#downloads section")],
                s = $(location.hash || null);
            o
                .filter((e) => e !== s)
                .forEach(({ style: e }) => (e.display = "none")),
                s && (e.scrollTop = s.offsetTop),
                t.style.removeProperty("display"),
                n(t).then(() => {
                    o.forEach(({ style: e }) => e.removeProperty("display")),
                        (e.scrollTop = t.offsetTop);
                });
        };
    $$(".quick-scroll-link").forEach(
        (e) =>
            (e.onclick = function (e) {
                e.preventDefault(), i($(this.getAttribute("href")));
            })
    ),
        $$(".slow-scroll-link").forEach(
            (e) =>
                (e.onclick = function (e) {
                    e.preventDefault(), n($(this.getAttribute("href")));
                })
        ),
        window.addEventListener("load", () => {
            setTimeout(() => s(location.hash.split("#")[1]), 1e3),
                e.addEventListener("scroll", t);
        });
}
{
    $$(".download-card__sum-button").forEach(
        (e) =>
            (e.onclick = () => {
                let t = e.closest(".download-card");
                t
                    ? (t.style.transform = "rotateY(90deg)")
                    : ((t = e.closest(".download-card--wide")),
                      (t.style.transform = "rotateX(90deg)")),
                    setTimeout(() => {
                        t.style.removeProperty("transform"),
                            t.classList.toggle("show-sum");
                    }, 200);
            })
    );
    const e = (e, t) => {
        const s = e.querySelector(".selected");
        s && s.classList.remove("selected"),
            e.querySelector(`[data-tab=${t}]`).classList.add("selected");
        const n = e.nextElementSibling;
        (n.ontransitionend = () => {
            (n.ontransitionend = null),
                n
                    .querySelectorAll(".download-cards")
                    .forEach(({ style: e }) => (e.display = "none")),
                $(`#${t}`).style.removeProperty("display"),
                (n.style.opacity = 1);
        }),
            (n.style.opacity = 0);
    };
    $$(".downloads-tabs").forEach((t) =>
        [...t.children].forEach(
            (n) => (n.onclick = e.bind(this, t, n.dataset.tab))
        )
    ),
        $$(".downloads-tabs a.selected").forEach((e) => e.click());
}
{
    const e = [];
    $$(".__js-animation").forEach((t) => {
        let n = 0;
        [...t.children].forEach((t, s, o) => {
            e.push({ func: () => (t.style.opacity = 0), time: 0 }),
                e.push({ func: () => (t.style.opacity = 1), time: n }),
                (n += parseInt(t.dataset.animationDuration || 100 / o.length));
        });
    });
    let t = 0;
    setInterval(() => {
        e.forEach(({ func: e, time: n }) => t % 100 >= n && e()), t++;
    }, 100);
}
