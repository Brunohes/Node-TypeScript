const gulp = require('gulp')
const ts = require('gulp-typescript')

const gulpCopy = require('gulp-copy')
const server = require('gulp-develop-server')
const tsProject = ts.createProject('tsconfig.json')

const destination = 'dist/'

// Clone Files to Dist
gulp.task('assets', () => {
	gulp.src('./src/public/*')
		.pipe(gulpCopy(destination, { prefix: 1 }))
		.pipe(gulp.dest(destination))

	gulp.src('./src/assets/*')
		.pipe(gulpCopy(destination, { prefix: 1 }))
		.pipe(gulp.dest(destination))
})

// Watch changes typescript
gulp.task('scripts', async () => {
	return new Promise(resolve => {
		const tsResult = gulp.src('./src/**/*.ts').pipe(tsProject())
		tsResult.js.pipe(gulp.dest('./dist/')).on('end', resolve)
	})
})

gulp.task('watch', ['scripts'], () => {
	gulp.watch('./src/**/*.ts', ['scripts'])
})

// Default Tasks
gulp.task('server', ['assets', 'watch'], () => {
	server.listen({ path: './dist/server.js' })
	gulp.watch(['./dist/*'], server.restart)
})

gulp.task('build', ['assets', 'scripts'])
