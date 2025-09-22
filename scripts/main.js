 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a//dev/null b/scripts/main.js
index 0000000000000000000000000000000000000000..27b3ddcb5a80b8ecdcd6436a34ada50a85b91500 100644
--- a//dev/null
+++ b/scripts/main.js
@@ -0,0 +1,33 @@
+(() => {
+  const body = document.body;
+  if (body) {
+    body.classList.add('js');
+  }
+
+  const animatedSections = document.querySelectorAll('.animate-on-scroll');
+  if (!animatedSections.length) {
+    return;
+  }
+
+  if ('IntersectionObserver' in window) {
+    const observer = new IntersectionObserver(
+      entries => {
+        entries.forEach(entry => {
+          if (entry.isIntersecting) {
+            entry.target.classList.add('visible');
+            observer.unobserve(entry.target);
+          }
+        });
+      },
+      { threshold: 0.1 }
+    );
+
+    animatedSections.forEach(section => {
+      observer.observe(section);
+    });
+  } else {
+    animatedSections.forEach(section => {
+      section.classList.add('visible');
+    });
+  }
+})();
 
EOF
)
