$dest = Join-Path $PSScriptRoot "..\assets\images"
New-Item -ItemType Directory -Force -Path $dest | Out-Null

$images = @(
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/screenshot-2022-04-16-140533.png"; name = "carol-primary.png" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/tree-in-water-teal-and-soothing.jpg"; name = "tree-in-water-teal.jpg" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/editor/fire-formula.gif"; name = "fire-formula.gif" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/banner.png"; name = "banner.png" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/green-wide.jpg"; name = "green-wide.jpg" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/banner-light-blue-and-gray.png"; name = "banner-light-blue-gray.png" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/enlightened-entrepreneurship-2.jpg"; name = "enlightened-entrepreneurship-2.jpg" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/sq-image.jpg"; name = "book-fire-formula.jpg" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/square-2.jpg"; name = "book-meditation.jpg" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/square-for-fb.png"; name = "book-happy-life.png" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/sq-inage.png"; name = "book-enlightened-entrepreneurship.png" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/published/cover-sq.png"; name = "book-networking-conversation.png" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/thymus-thumb-sm_orig.png"; name = "meditation-thymus.png" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/self-love-thumb-sm_orig.png"; name = "meditation-self-love.png" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/regeneration-thumbnail-sm_orig.png"; name = "meditation-regeneration.png" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/transformation-thumb-sm_orig.png"; name = "meditation-transformation.png" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/brain-boost-thumb-sm_orig.png"; name = "meditation-brain-boost.png" },
  @{ url = "https://www.carolmerlo.com/uploads/1/2/9/6/12965579/abundance-thum-sm_orig.png"; name = "meditation-abundance.png" }
)

$ok = 0
$fail = 0

foreach ($img in $images) {
  $path = Join-Path $dest $img.name
  try {
    Invoke-WebRequest -Uri $img.url -OutFile $path -UseBasicParsing -ErrorAction Stop
    $size = (Get-Item $path).Length
    Write-Host "  OK  $($img.name) ($size bytes)" -ForegroundColor Green
    $ok++
  } catch {
    Write-Host "FAIL  $($img.name)" -ForegroundColor Red
    $fail++
  }
}

Write-Host ""
Write-Host "$ok downloaded, $fail failed." -ForegroundColor Cyan
